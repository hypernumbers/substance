  // Dashboard
  // ---------------

  sc.views.Dashboard = Substance.View.extend({
    id: 'container',
    events: {
      'click .delete-document': '_deleteDocument',
    },

    _deleteDocument: function(e) {
      var docId = $(e.currentTarget).attr('data-id');
      Substance.session.deleteDocument(docId);
      this.render();
      return false;
    },

    render: function() {
      this.$el.html(_.tpl('dashboard', {}));

      // Render document browser
      this.$('.documents').empty();
      this.$('.documents').append(new Ken.Browser({model: this.model}).render().el);
      return this;
    },

    dispose: function() {
      console.log('disposing dashboard view');
      this.disposeBindings();
    }
  });