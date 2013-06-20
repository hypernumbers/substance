(function(root) { "use_strict";

var sc = root.sc;
var _ = root._;
var Substance = root.Substance;

sc.views.Comments = Substance.View.extend({

  // Events
  // ------

  events: {
    'click .insert-comment': '_insertComment',
    'click .delete-comment': '_deleteComment',
    'click .close-issue': '_closeIssue',
    'click .comment-scope': '_toggleScope'
  },

  // Handlers
  // --------

  _insertComment: function(e) {
    var node = this.$('.comment-scope.active').attr('data-node');
    var annotation = this.$('.comment-scope.active').attr('data-annotation');
    var content = $(e.currentTarget).parent().find('.comment-content').val();

    // No empty comments allowed
    if (content.trim().length === 0) return false;

    if (!node) node = undefined;
    if (!annotation) annotation = undefined;

    console.log('current scope', this.scope);
    console.log('node', node);
    console.log('annotation', annotation);

    // Stick comment on annotation or node
    var target = annotation || node;

    var cmd = ["comment", target, {
        "id": "comment_"+Substance.util.uuid(),
        "content": content.trim(),
        "created_at": new Date().toJSON(),
        "creator": this.session.user()
      }
    ];

    console.log('the command', cmd);

    this.document.exec(cmd);

    // this.document.apply(["insert", {
    //   id: "comment:"+Substance.util.uuid(),
    //   type: "comment",
    //   data: {
    //     content: content,
    //     node: node,
    //     annotation: annotation,
    //     created_at: new Date().toJSON(),
    //     creator: this.session.user()
    //   }
    // }]);

    console.log('the fresh comment', this.document.find('comments', target));

    // Not too smart™
    this.comments.compute(this.scope);

    // this.render(); // compute triggers an event that causes re-render

    // Notify Composer -> triggers a re-render
    if (node) Substance.router.trigger('node:dirty', node);

    return false;
  },

  _deleteComment: function(e) {
    var comment = $(e.currentTarget).attr('data-id');
    this.document.apply(["delete", { nodes: [comment] }]);
    this.comments.compute(this.scope);
    return false;
  },

  _closeIssue: function() {
    var node = this.$('.comment-scope.active').attr('data-node');
    var annotation = this.$('.comment-scope.active').attr('data-annotation');

    this.document.apply(["delete", { nodes: [annotation] }]);
    this.comments.compute();

    this.activateScope('node_comments');

    // Delete all associated comments
    var comments = this.document.find('comments', annotation);

    this.document.apply(["delete", { nodes: _.pluck(comments, 'id')}]);

    // Notify Surface
    Substance.router.trigger('annotation:deleted', node, annotation);

    // Notify Composer -> triggers a re-render
    Substance.router.trigger('node:dirty', node);
    return false;
  },

  _toggleScope: function(e) {
    var node = $(e.currentTarget).attr('data-node');
    var annotation = $(e.currentTarget).attr('data-annotation');
    var scope = $(e.currentTarget).attr('id');

    // Notify Surface
    Substance.router.trigger('comment-scope:selected', scope, node, annotation);
  },

  activateScope: function(scope) {
    // console.log('activating scope should not happen twice', scope);
    if (!scope) return; // TODO: Skip, if already active
    this.scope = scope;
    this.$('.comment-scope').removeClass('active');
    this.$('#'+_.htmlId(scope)).addClass('active');

    this.$('.comments').removeClass('active');
    // Show corresponding comments
    this.$('#comments_'+_.htmlId(scope)).addClass('active');
  },

  initialize: function(options) {
    this.documentView = options.documentView;

    this.session = this.model;
    this.document = this.session.document;
    this.comments = this.session.comments;

    // Initial comments computation
    this.comments.compute();

    // Triggered by Text Node
    Substance.router.off('comment-scope:selected', this.activateScope);
    Substance.router.on('comment-scope:selected', this.activateScope, this);

    // Listing to comments:updated event on session
    this.session.off('comments:updated', this.render);
    this.session.on('comments:updated', this.render, this);
  },

  render: function (scope) {
    // Reset selected scope on every re-render
    this.scope = scope;

    this.$el.html(_.tpl('comments', this.session));
    this.activateScope(this.scope);
    return this;
  },

  dispose: function() {
    console.log('disposing comments view');
    this.disposeBindings();
  }
});

})(this);
