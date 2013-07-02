(function(root) {

  // The Substance Namespace

  var Substance = root.Substance;
  var _ = root._;

  var Composer = Substance.View.extend({

    // DOM Event Handlers
    // --------

    events: {
      'click .properties': '_clear',
      'click a.insert': '_insert',
      'click a.move.up': '_moveUp',
      'click a.move.down': '_moveDown',
      'click .content-node a.delete': '_deleteNode'
    },

    _clear: function() { return this.clear(); },

    _insert: function(e) {
      var type = $(e.currentTarget).attr('data-type');
      this.views.document.insertNode(type, {});
      return false;
    },

    // Message Handlers
    // --------

    messages: {
      'select-previous': '_selectPrevious',
      'select-next': '_selectNext',
      'expand-selection': '_expandSelection',
      'narrow-selection': '_narrowSelection',
      'go-back': '_goBack',
      'move-down': '_moveDown',
      'move-up': '_moveUp',
      'break-text': '_breakText',
      'delete-node': '_deleteNode',
      'insert-node': '_insertNode',
      'toggle-annotation': '_toggleAnnotation',
      'get-selection': '_getSelection',
      'undo': '_undo',
      'redo': '_redo',
      'indent': '_indent',
      'dedent': '_dedent'
    },

    // Select next node
    _selectNext: function(e) {
      // If in selection/structure mode
      if (this.model.document.level() <= 2) {
        this.views.document.selectNext();
        // stop propageting the key events
        e.preventDefault();
      }
    },

    // Select previous node
    _selectPrevious: function(e) {
      // If in selection/structure mode
      if (this.model.document.level() <= 2) {
        this.views.document.selectPrev();
        // stop propageting the key events
        e.preventDefault();
      }
    },

    // Move current selection down by one
    _moveDown: function(e) {
      if (this.model.document.level() === 2) {
        this.views.document.moveDown();
        e.preventDefault();
      }
    },

    // Move current selection up by one
    _moveUp: function(e) {
      if (this.model.document.level() === 2) {
        this.views.document.moveUp();
        e.preventDefault();
      }
    },

    // Go up one level
    _goBack: function(e) {
      var lvl = this.model.document.level();
      if (lvl === 2) return this.clear();

      this.model.document.edit = false;
      // TODO: Only deactivate currently active surface -> performance
      $(".content-node .content").blur();
      this.updateMode();
      e.preventDefault();
    },

    // Current select + next element
    _expandSelection: function(e) {
      // Structure mode
      if (this.model.document.level() === 2) {
        this.views.document.expandSelection();
        e.preventDefault();
      }
    },

    // Current select - last element
    _narrowSelection: function(e) {
      if (this.model.document.level() === 2) {
        this.views.document.narrowSelection();
        e.preventDefault();
      }
    },

    // Delete currently selected nodes
    _deleteNode: function(e) {
      if (this.model.document.level() === 2) {
        this.views.document.deleteNodes();
        e.preventDefault();
      }
    },

    // Insert node based on current selection
    _insertNode: function(e, type) {
      // this.views.document.insertNode(type, {});
      this.session.createEmptyNode(type);

      e.preventDefault();
    },

    // Toggle annotation for given selection
    _toggleAnnotation: function(e, type) {
      if (this.model.document.level() === 3) {
        var node = this.views.document.nodes[this.model.document.selection()[0]];
        node.annotate(type);
        e.preventDefault();
      }
    },

    // TODO: Just testing the new multi-node selection API
    _getSelection: function(e, type) {

      var indexOf = Array.prototype.indexOf;
      var sel = window.getSelection();
      if (sel.type === "None") return null;

      var range = sel.getRangeAt(0);
      var startContainer = range.startContainer;
      var endContainer = range.endContainer;

      var $startContainer = $(startContainer).parent().parent();
      var $endContainer = $(endContainer).parent().parent();

      var view = this.model.document.get('content').nodes;

      var startNode = view.indexOf($startContainer.parent().attr('id'));
      var startChar = startContainer.parentElement;
      var startOffset = startContainer.nodeType === 3 ? indexOf.call($startContainer[0].childNodes, startChar) : 0;

      var sel;
      // console.log(startContainer, endContainer);
      // Trivial case: the range is singular
      if (startContainer === endContainer && startOffset === endOffset) {
        console.log('MEH');
        sel = {
          start: [startNode, startOffset],
          end: [startNode, startOffset],
        };
      } else {
        var endNode = view.indexOf($endContainer.parent().attr('id'));
        var endChar = endContainer.parentElement;
        var endOffset = indexOf.call($endContainer[0].childNodes, endChar) + 1;
        // startContainer.nodeType === 3 ? indexOf.call($startContainer.childNodes, parent) : 0;
        
        // There's an edge case at the very beginning
        if (range.startOffset !== 0) startOffset += 1;
        if (range.startOffset > 1) startOffset = range.startOffset;

        sel = {
          start: [startNode, startOffset],
          end: [endNode, endOffset],
        };
      }

      console.log(JSON.stringify(sel));
      return sel;
    },

    _undo: function() {
      this.model.document.select([]); // Deselect
      this.chronicle.rewind();
      this.init();
      this.render();
      return false;
    },

    _redo: function() {
      this.model.document.select([]); // Deselect
      this.chronicle.forward(this.chronicle.find("last"));
      this.init();
      this.render();
      return false;
    },

    _indent: function(e, reverse) {
      if (this.model.document.level() === 3) {
        var node = this.views.document.nodes[_.first(this.model.document.selection())];

        if (node.model.type === "heading") {
          var level = node.model.level;

          if (!level) level = 1;
          if (reverse) {
            level = Math.max(level-1, 1);
          } else {
            level = Math.min(level+1, 3);
          }

          this.model.document.apply(["update", {id: node.model.id, "data": {
            "level": level
          }}]);

          $(node.el).removeClass('level-1')
                    .removeClass('level-2')
                    .removeClass('level-3');

          $(node.el).addClass('level-'+level);

          e.preventDefault();
        }
        e.preventDefault();
      }
    },

    _dedent: function(e) {
      this._indent(e, true);
    },


    // Bindings
    // --------

    bindings: [
      ['model.document', 'commit:applied', '_commitApplied'],
      ['model.document', 'ref:updated', '_refUpdated']
    ],


    // State, that there's a sync pending
    _commitApplied: function() {
      $('#header .sync').removeClass('disabled');
      this.updateUndoRedoControls();
    },

    _refUpdated: function() {
      console.log('ref updated, yay');
      this.updateUndoRedoControls();
    },

    initialize: function() {
      this.mode = "edit";
      // this.model = this.model;
      this.chronicle = this.model.chronicle;
      this.init();
    },


    // View Logic
    // --------

    init: function() {
      // Views go here
      this.views = {};

      this.views.document = new Substance.Composer.views.Document({ model: this.model });
      this.views.tools = new Substance.Composer.views.Tools({ model: this.model });
    },

    clear: function() {
      // HACK: ensures there are no remaining floating annotation controls
      $('.annotation-tools').hide();
      this.model.document.select([]);
      this.updateMode();
    },

    // Is that cool?
    updateMode: function() {
      this.views.document.updateMode();
    },

    render: function() {
      var that = this;
      this.$el.html(_.tpl('composer'));
      this.renderDoc();

      that.updateMode();
      return this;
    },

    renderDoc: function() {
      var that = this;
      var doc = this.views.document;
      doc.render();
      that.$('#document').replaceWith(doc.el);
      that.$('#tools').html(that.views.tools.render().el);
    },

    dispose: function() {
      console.log('disposing composer instance...');
      this.disposeBindings();
      this.views.document.dispose();
      this.views.tools.dispose();
    }
  },

  // Class Variables
  {
    models: {},
    views: {},
    utils: {}
  });

  // Exports
  Substance.Composer = Composer;
  
  root.s = Substance;
  root.sc = Substance.Composer;

})(window);
