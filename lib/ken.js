

// Ken
// -----------------
// 
// A Visual Knowledge Browser


var Ken = {};


// Colors
// ------------

Ken.COLOR_PALETTES = {
  "greenish": ["#116436", "#659e47"],
  "blueish": ["#1763a9", "#293d7f", "#249fd7"],
  "redish": ["#8b1270", "#b10545", "#5c0b44", "#61290c"]
};

// Ken.ColorPool
// -----------------
// 

Ken.ColorPool = function(colors) {
  var keys = _.keys(colors);
  var paletteIndex = 0;
  var palettes = {};
  
  // Initialize color indexes
  _.each(colors, function(c, key, index) {
    palettes[key] = {
      paletteIndex: index,
      colorIndex: 0,
      colors: c
    };
  });
  
  // Get a new color, either from a given group or the just the next available
  function getNext(paletteKey) {
    if (paletteKey) {
      var palette = palettes[paletteKey];
      var color = palette.colors[palette.colorIndex];
      palette.colorIndex = (palette.colorIndex+1) % palette.colors.length;
    } else {
      var palette = palettes[keys[paletteIndex]];
      var color = palette.colors[palette.colorIndex];
      palette.colorIndex = (palette.colorIndex+1) % palette.colors.length;
      paletteIndex = (paletteIndex+1) % keys.length;
    }
    return color;
  }
  
  function reset() {
    _.each(palettes, function(palette, key) {
      palette.colorIndex = 0;
    });
    paletteIndex = 0;
  }
  
  return {
    getNext: getNext,
    reset: reset
  }
};


// Reusable sorter

var OBJECTS_BY_PUBDATE_DESC = function(item1, item2) {
  var d1 = item1.published_at;
  var d2 = item2.published_at;
  var i1 = d1 ? new Date(d1).toISOString() : "0000";
  var i2 = d2 ? new Date(d2).toISOString() : "0000";

  return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
};

// Ken.Session
// -----------------

Ken.Session = function(options) {
  console.log('init session', options);
  // The original collection
  this.collection = options.collection;
  this.facets = options.facets;
  this.filteredCollection = options.collection;

  this.filterValueCount = 0;
  this.filters = {};
  this.matches = {};
  this.colors = new Ken.ColorPool(Ken.COLOR_PALETTES);
  this.initValueMap();
};


_.extend(Ken.Session.prototype, Substance.util.Events, {

  addFilter: function(property, value) {
    if (!this.filters[property]) this.filters[property] = {};
    this.filters[property][value] = {
      color: this.colors.getNext()
    };
    this.filterValueCount += 1;
    this.filter();
  },

  removeFilter: function(property, value) {
    delete this.filters[property][value];
    this.filterValueCount -= 1;
    this.filter();
  },

  // Compute collection based on filters
  filter: function() {
    var that = this;

    // Reset matches
    this.matches = {};

    function flattenFilters() {
      var filters = [];
      _.each(that.filters, function(f, key) {
        _.each(f, function(bla, val) {
          filters.push({
            property: key,
            value: val
          });
        });
      });
      return filters;
    }

    function registerMatch(o, filter) {
      var obj = that.matches[o.id];
      if (!obj) obj = that.matches[o.id] = [];
      obj.push(filter);
    }

    var filters = flattenFilters();

    this.prevFilteredCollection = this.filteredCollection;

    // Join 'em together
    if (filters.length > 0) {

      var filteredObjects = [];
      _.each(filters, function(f) {
        var objects = this.valueMap[f.property][f.value];
        _.each(objects, function(o) {
          registerMatch(o, [f.property, f.value]);
          filteredObjects.push(o);
        }, this);
      }, this);

      var OBJECTS_BY_RELEVANCE = function(item1, item2) {
        var i1 = that.getMatchesForObject(item1);
        var i2 = that.getMatchesForObject(item2);
        return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
      };

      var OBJECTS_BY_RELEVANCE_AND_PUBDATE = function(item1, item2) {
        var d1 = item1.published_at || "2000-01-01";
        var d2 = item2.published_at || "2000-01-01";
        var i1 = that.getMatchesForObject(item1) + new Date(d2).toISOString();
        var i2 = that.getMatchesForObject(item2) + new Date(d1).toISOString();
        return i1 === i2 ? 0 : (i1 < i2 ? -1 : 1);
      };

      filteredObjects = _.uniq(filteredObjects).sort(OBJECTS_BY_RELEVANCE_AND_PUBDATE);
    } else { // no filters set
      filteredObjects = this.collection.sort(OBJECTS_BY_PUBDATE_DESC);
    }

    this.filteredCollection = filteredObjects;

    this.trigger('data:changed');
  },

  getMatchesForObject: function(o) {
    var that = this;
    return _.map(this.matches[o.id], function(filter) {
      return that.filters[filter[0]][filter[1]];
    });
  },

  // Based on current filter criteria, get facets
  getFacets: function() {
    var that = this;
    var facets = {};

    _.each(this.facets, function(f) {
      function getRelatedObjects(property, value) {
        var objects = [];
        _.each(that.valueMap[property][value], function(o) {
          if (_.include(that.filteredCollection, o)) objects.push(o);
        });
        return objects;
      }

      function getAvailableValues() {
        // Extract available values
        var values = [];
        _.each(that.valueMap[f.property], function(objects, value) {
          values.push({
            val: value,
            objects: objects,
            relatedObjects: getRelatedObjects(f.property, value),
            selected: that.filters[f.property] && that.filters[f.property][value],
            color: that.filters[f.property] && that.filters[f.property][value] ? that.filters[f.property][value].color : null
          });
        });
        return values;
      }

      // Delete?
      function getSelectedValues() {
        var values = [];
        _.each(that.filters[f.property], function(filter, val) {
          values.push({
            val: val,
            objects: that.valueMap[f.property][val],
            relatedObjects: getRelatedObjects(f.property, val),
            color: filter.color
          });
        });
        return values;
      }

      // Find max object count
      var availableValues = getAvailableValues();
      var selectedValues  = getSelectedValues();
      var maxCount = Math.max.apply(this, _.map(availableValues.concat(selectedValues), function(v) {
        return v.objects.length
      }));

      // Sort functions
      var VALUES_BY_RELEVANCE = function(item1, item2) {
        var i1 = item1.relatedObjects.length;
        var i2 = item2.relatedObjects.length;
        return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
      };
      
      var VALUES_BY_FREQUENCY = function(item1, item2) {
        var i1 = item1.objects.length;
        var i2 = item2.objects.length;
        return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
      };

      var VALUES_BY_RELEVANCE_AND_FREQUENCY = function(item1, item2) {
        var byRelevance = VALUES_BY_RELEVANCE(item1, item2);
        if (byRelevance !== 0) return byRelevance;
        return VALUES_BY_FREQUENCY(item1, item2);
      };

      availableValues = availableValues.sort(VALUES_BY_FREQUENCY);
      selectedValues = selectedValues.sort(VALUES_BY_RELEVANCE_AND_FREQUENCY);

      facets[f.property] = {
        property: f.property,
        name: f.name,
        availableValues: availableValues,
        selectedValues: selectedValues,
        values: [],
        maxObjectCount: maxCount
      };
    });
    return facets;
  },

  initValueMap: function() {
    var that = this;

    this.valueMap = {};

    function extractValues(key) {
      var values = {};

      function registerVal(val, o) {
        if (values[val]) {
          values[val].push(o);
        } else {
          values[val] = [o];
        }
      }

      _.each(that.collection, function(o) {
        var vals = o[key];
        vals = _.isArray(vals) ? vals : [ vals ];
        
        _.each(vals, function(v) {
          registerVal(v, o);
        });
      });
      return values;
    }

    _.each(this.facets, function(f) {
      that.valueMap[f.property] = extractValues(f.property);
    }, this);
  }
});



// Ken.Matrix
// -----------------
// 
// Matrix Plot

Ken.Matrix = Backbone.View.extend({

  // Update matrix with new data
  // -----------------
  // 

  update: function() {
    // Re-render everything for now
    this.$el.empty();

    _.each(this.model.filteredCollection, function(item) {
      var element = this.newItem(item);
      this.$el.append(element);
    }, this);
  },

  // Constructs a new matrix item based on a template
  // -----------------
  // 

  newItem: function(item) {
    var html = _.tpl('item', {
      item: item,
      matches: this.model.getMatchesForObject(item)
    });
  
    return $($.parseHTML(html));
  },

  // Initial render of matrix
  // -----------------
  // 

  render: function() {
    this.update();
    return this;
  }
});



// Ken.Facets
// -----------------

Ken.Facets = Backbone.View.extend({
  events: {
    'click a.value.add': 'addValue',
    'click a.value.remove': 'removeValue'
  },
  
  // Set a new filter
  addValue: function(e) {
    var property = $(e.currentTarget).attr('data-property'),
        value = $(e.currentTarget).attr('data-value');
    this.model.addFilter(property, value);
    return false;
  },
  
  // Set a new filter
  removeValue: function(e) {
    var property = $(e.currentTarget).attr('data-property'),
        value = $(e.currentTarget).attr('data-value');
    this.model.removeFilter(property, value);
    return false;
  },

  initialize: function(options) {

  },
  
  render: function() {;
    $(this.el).html(_.tpl('facets', {
      collection: this.model.collection,
      filters: this.model.filters,
      facets: this.model.getFacets()
    }));
    return this;
  }
});


// Ken.Browser
// -------------------

Ken.Browser = Backbone.View.extend({
  events: {

  },
  
  initialize: function(options) {
    this.model.filter();
    this.model.bind('data:changed', this.update, this);
  },
  
  // Update plot and facets
  update: function() {
    this.matrix.update();
    this.facets.render();

    $('#facets .article-count').html('Showing '+ this.model.filteredCollection.length+' out of '+ this.model.collection.length+' articles');
  },
  
  render: function() {
    var that = this;
    // Should be rendered just once
    $(this.el).html(_.tpl('browser', this.model));

    this.facets = new Ken.Facets({model: this.model, el: this.$('#facets')});
    this.matrix = new Ken.Matrix({model: this.model, el: this.$('#matrix')});
      
    // Initially render the facets
    this.facets.render();

    that.matrix.render();
    return this;
  }
});