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

    Substance.session.createCollaborator(collaborator, function(err) {
      that.render(); // re-render
    });
    return false;
  },

  _deleteCollaborator: function(e) {
    console('meeh');
    // var id = $(e.currentTarget).attr('data-id');
    // var that = this;
    
    // Substance.session.deleteCollaborator(id, function(err) {
    //   that.render();
    // });
    // return false;
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