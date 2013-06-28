sc.views.Collaborators = Substance.View.extend({

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
    console.log('creating a new collaborator ...', collaborator);
    var that = this;

    this.model.createCollaborator(collaborator, function(err) {
      console.log('created collaborator.');
      that.render(); // re-render
    });
    return false;
  },

  _deleteCollaborator: function(e) {
    var id = $(e.currentTarget).attr('data-id');
    var that = this;
  
    this.model.deleteCollaborator(id, function(err) {
      console.log('deleted collaborator');
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