(function(root) { "use_strict";

var _ = root._;
var sc = root.sc;

sc.views.Node.define('heading', _.extend(sc.views.Textish, {

  className: 'content-node heading',

  // This should be moved into a separate module
  events: {
    'mousedown .annotation-tools .toggle': 'toggleAnnotation',
    'click .annotation-tools .toggle': function() { return false; }
  },

  types: {
    "idea": {
      "description": 'Idea',
      "inclusive": false,
      "visibility" : 'both'
    },
    "question": {
      "description": 'Question',
      "inclusive": false,
      "visibility" : 'both'
    },
    "error": {
      "description": 'Error',
      "inclusive": false,
      "visibility" : 'both'
    }
  },

  // DO WE NEED THIS?
  initialize: function () {
    sc.views.Node.prototype.initialize.apply(this, arguments);
  },

  render: function () {
    sc.views.Node.prototype.render.apply(this, arguments);
    var level = this.model.level || 1;
    $(this.el).addClass('level-'+level);

    this.initSurface();
    return this;
  }
}));

})(this);
