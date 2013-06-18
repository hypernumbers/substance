(function(root) { "use_strict";

var _ = root._;
var sc = root.sc;

sc.views.Node.define('codeblock', _.extend(sc.views.Textish, {

  className: 'content-node code',

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

  // This should be moved into a separate module
  events: {
    'mousedown .annotation-tools .toggle': 'toggleAnnotation',
    'click .annotation-tools .toggle': function() { return false; },
    'change .annotation-tools .link-url': 'updateLink'
    // 'mousedown .annotation-tools': function() { console.log('intercepted.'); return false; },
    // 'click .annotation-tools': function() { return false; }
  },

  initialize: function() {
    sc.views.Node.prototype.initialize.apply(this, arguments);
  },

  // Deal with incoming update
  update: function() {
    // TODO: implement
  },

  render: function() {
    sc.views.Node.prototype.render.apply(this, arguments);
    this.initSurface();
    return this;
  }
}));

})(this);
