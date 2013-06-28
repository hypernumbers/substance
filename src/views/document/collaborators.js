sc.views.Collaborators = Substance.View.extend({

  // `this.model` holds a Substance.Session object
  // 

  // Events
  // ------

  events: {
    'click .create-collaborator': '_createCollaborator',
    'click .delete-collaborator': '_deleteCollaborator'
  },

  // Handlers
  // --------

  _createCollaborator: function(e) {
    var collaborator = this.$('#new_collaborator').val();
    var that = this;

    this.model.document.createCollaborator(collaborator, function(err) {
      that.render(); // re-render
    });
    return false;
  },

  _deleteCollaborator: function(e) {
    var id = $(e.currentTarget).attr('data-id');
    var that = this;
  
    this.model.document.deleteCollaborator(id, function(err) {
      that.render();
    });
    return false;
  },

  initialize: function() {
    
  },

  render: function () {
    this.$el.html(_.tpl('document_collaborators', this.model)); 
    return this;
  },

  dispose: function() {
    console.log('disposing collaborators view');
    this.disposeBindings();
  }
});