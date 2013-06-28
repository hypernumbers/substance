(function(root) { "use_strict";

var sc = root.sc;
var Substance = root.Substance;
var _ = root._;

sc.views.DocumentTool = Substance.View.extend({

  // Events
  // ------

  events: {
    'click .toggle-tool': '_toggleTool'
  },

  _toggleTool: function(e) {
    var viewName = $(e.currentTarget).attr('data-view');
    this.views.tool = new sc.views[viewName]({
      model: this.session,
      session: this.session
    });
    this.$('.tool').html(this.views.tool.render().el);
    $('.navigation .toggle-tool').removeClass('active');
    $(e.currentTarget).addClass('active');
    return;
  },

  // Handlers
  // --------

  initialize: function(options) {
    this.session = this.model;
    this.documentView = options.documentView;

    // Views
    this.views = {};
    this.views.tool = new sc.views.Comments({ model: this.session });
  },

  render: function() {
    this.$el.html(_.tpl('tools', this.session.document));
    this.$('.tool').html(this.views.tool.render().el);
    return this;
  }
});


sc.views.Tools = Substance.View.extend({

  // Events
  // ------

  events: {
    'click .toggle-tool': '_toggleTool'
  },

  _toggleTool: function(e) {
    this.view = $(e.currentTarget).attr('data-view');

    this.update();
    return false;
  },

  // Handlers
  // --------

  initialize: function(options) {
    this.session = this.model;
    this.documentView = options.documentView;

    // Views
    this.views = {};

    // Default View
    this.view = 'comments';
    this.comments();
  },

  // Toggle document outline
  outline: function() {
    this.views.tool = new sc.views.Outline({model: this.session});
  },

  // Toggle patches view
  patches: function() {
    this.views.tool = new sc.views.Patches({model: this.session});
  },

  // Toggle document history
  history: function() {
    this.views.tool = new sc.views.History({model: this.session});
  },

  // Toggle comments
  comments: function() {
    this.views.tool = new sc.views.Comments({
      model: this.session
    });
  },

  // Update tool state (e.g. if the selection has changed)
  update: function() {
    // TODO: be somewhat smarter with re-rendering
    this[this.view]();
    this.render();
  },

  render: function() {
    this.$el.html(_.tpl('tools', _.extend(this.session.document, {
      view: this.view
    })));
    this.$('.tool').html(this.views.tool.render().el);
    return this;
  },

  dispose: function() {
    console.log('disposing tools view');
    this.disposeBindings();
    this.views.tool.dispose();
  }
});

})(this);
