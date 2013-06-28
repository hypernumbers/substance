sc.views.Publications = Substance.View.extend({

  // `this.model` holds a Substance.Session object
  // 

  // Events
  // ------

  events: {
    'click .add-publication': '_addPublication',
    'click .delete-publication': '_deletePublication',
    'click .create-version': '_createVersion',
    'click .unpublish-document': '_unpublish',
  },

  // Handlers
  // --------

  _createVersion: function() {
    var that = this;
    Substance.session.createVersion(function(err) {
      that.trigger('publish_state:updated');
      that.render();
    });
    return false;
  },

  _unpublish: function() {
    var that = this;
    Substance.session.unpublish(function(err) {
      that.trigger('publish_state:updated');
      that.render();
    });
    return false;
  },

  _addPublication: function(e) {
    var network = $('#substance_networks').val();
    var that = this;
    Substance.session.createPublication(network, function(err) {
      that.render();
    });
    return false;
  },

  _deletePublication: function(e) {
    var id = $(e.currentTarget).attr('data-id');
    var that = this;
    
    // console.log('deleting publication', id);
    this.model.document.deletePublication(id, function(err) {
      if (err) console.log(err);
      console.log('done deleting..');
      that.render();
    });
    return false;
  },

  render: function() {
    this.$el.html(_.tpl('publications', this.model));
    return this;
  },

  dispose: function() {
    console.log('disposing publish settings view');
    this.disposeBindings();
  }
});