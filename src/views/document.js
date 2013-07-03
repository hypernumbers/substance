(function(root) {

var sc = root.sc;
var Substance = root.Substance;
var _ = root._;
var ot = Substance.Chronicle.ot;
var Data = Substance.Data;

var DocumentView = Substance.View.extend({
  id: 'document',

  // Events
  // ------

  events: {
    'click .content-node': 'select',
    'click .comments-toggle': function(e) {
      e.preventDefault();
    }
  },

// Constructor
  // --------

  initialize: function() {

    var self = this;
    this.session = this.model;
    this.document = this.session.document;

    // Bind handlers to establish co-transformations on html elements
    // according to model properties
    this.viewAdapter = new DocumentView.ViewAdapter(this, '#document .nodes');
    this.nodeAdapter = function(op) {
      DocumentView.onNodeContentUpdate(self, op);
    };
    this.document.propertyChanges().bind(this.viewAdapter, {path: ["content", "nodes"]});
    this.document.propertyChanges().bind(this.nodeAdapter, {path: ["*", "content"]});

    // Handlers
    function highlightAnnotation(scope, node, annotation) {
      var a = this.document.nodes[annotation];

      if (a) {
        $('#'+_.htmlId(node)+' .handle-2').removeClass().addClass('handle-2').addClass(a.type);
      } else {
        $('#'+_.htmlId(node)+' .handle-2').removeClass().addClass('handle-2');
      }

      node = this.nodes[node];
      if (node && node.surface) {
        node.surface.highlight(annotation);
      }
    }

    // Delete Annotation
    function deleteAnnotation(node, annotation) {
      node = this.nodes[node];
      if (node && node.surface) node.surface.deleteAnnotation(annotation);
    }

    // Update Node
    function updateNode(nodeId) {
      // Update node since its dirty
      var node = this.nodes[nodeId];

      // TypeError: 'undefined' is not an object (evaluating 'node.render')
      if (!node) console.log('ERROR Spottid', nodeId, ' not found');
      if (node) node.render();
      this.updateSelections();
    }

    // Bind handlers (but only once)
    Substance.router.off('comment-scope:selected', highlightAnnotation);
    Substance.router.on('comment-scope:selected', highlightAnnotation, this);

    Substance.router.off('annotation:deleted', deleteAnnotation);
    Substance.router.on('annotation:deleted', deleteAnnotation, this);

    Substance.router.off('node:dirty', updateNode);
    Substance.router.on('node:dirty', updateNode, this);

    this.document.off('node:selected', this.updateSelections);
    this.document.on('node:selected', this.updateSelections, this);
    this.build();

    $(document.body).keydown(this.onKeydown);
  },



  // Handle local user interactions
  // ========
  //
  // Those usually execute a document command
  //

  // Insert new content node
  // --------
  //


  // Delete current selection
  // --------
  //

  deleteNodes: function() {
    this.document.exec(["delete", {"nodes": this.document.selection()}]);
  },

  // Set mode accordingly
  // --------
  //

  updateMode: function() {
    var selection = this.document.selection;
    $('#document').removeClass();

    if (selection.isNull()) {
      $('#document').addClass('document-mode');
    } else {
      $('#document').addClass(this.document.edit ? 'edit-mode' : 'structure-mode');
    }

    // Render context bar
    this.$('#context_bar').html(_.tpl('context_bar', {
      level: this.document.level(),
      // TODO: Use Plugin System!
      node_types: [
        { name: "Heading", type: "heading" },
        { name: "Text", type: "text" },
        { name: "Code", type: "codeblock" },
        { name: "Image", type: "image" }
      ]
    }));
  },

  // Update user node selection
  // --------
  //

  updateSelections: function() {
    $('.content-node.selected').removeClass('selected');

    // HACK: ensures there are no remaining floating annotation controls
    $('.annotation-tools').hide();

    this.updateMode();
    _.each(this.document.selections, function(user, node) {
      $('#'+_.htmlId(node)).addClass('selected');
    }, this);
  },

  // Select next node
  // --------
  //

  selectNext: function() {
    var selection = this.document.users[this.session.user()].selection;
    var nodes = this.document.get('content').nodes;
    if (selection.length === 0) return this.document.select([_.first(nodes)]);

    var nextPos = this.getSuccessor(_.last(selection));
    if (nextPos !== null) return this.document.select([this.getId(nextPos)]);
  },

  // Select previous node
  // --------
  //

  selectPrev: function() {
    var selection = this.document.users[this.session.user()].selection;
    var nodes = this.document.get('content').nodes;
    if (selection.length === 0) return this.document.select([_.last(nodes)]);
    var prevPos = this.getPredecessor(_.last(selection));
    if (prevPos !== null) return this.document.select([this.getId(prevPos)]);
  },

  // Expand current selection
  // --------
  //

  expandSelection: function() {
    var selection = this.document.users[this.session.user()].selection;
    var lastnode = _.last(selection);
    var doc = this.document;

    if (lastnode) {
      var next = this.getId(this.getSuccessor(lastnode));
      if (next) {
        this.document.select(selection.concat([next]));
      }
    }
  },

  // Narrow current selection
  // --------
  //

  narrowSelection: function() {
    var selection = this.document.users[this.session.user()].selection;
    this.document.select(_.clone(selection).splice(0, selection.length-1));
  },


  // Move selection down by one
  // --------
  //

  moveDown: function() {
    var selection = this.document.users[this.session.user()].selection;
    var target = this.getSuccessor(_.last(selection));
    if (target !== null) this.document.exec(["position", "content", {"nodes": selection, "target": target}]);
  },

  // Move selection up by one
  // --------
  //

  moveUp: function() {
    var selection = this.document.users[this.session.user()].selection;
    var target = this.getPredecessor(_.first(selection));
    if (target !== null) this.document.exec(["position", "content", {"nodes": selection, "target": target}]);
  },


  // Select a node
  // --------
  //

  select: function(e) {
    // Skip when move handle has been clicked
    if ($(e.target).hasClass('move')) return;
    var id = $(e.currentTarget)[0].id;
    this.document.select([id]);
  },


  // Document Command Handlers
  // ========
  //
  // Those are called after a command has been applied successfully
  // on the document model.

  // Obsolete?
  // set: function() {
  //   this.initSurface("abstract");
  //   this.initSurface("title");
  // },

  // TODO: can't we just skip that?
  // create: function(options) {
  //   var node = this.getNode(options.id);

  //   // Is this working?
  //   var baseType = this.document.schema.baseType(node.type);
  //   if (baseType !== "content") return; // skip non-content nodes
  // },

  // Utilities
  // ================

  // For a given node object create the corresponding view
  // --------
  //

  createNodeView: function(node) {
    return Substance.Composer.views.Node.create({
      document: this.document,
      model: node
    });
  },

  // Get successor for a given node id
  // --------
  //

  getSuccessor: function(id) {
    var pos = this.getPosition(id);
    var l = this.document.get('content').nodes.length;
    return (pos+1 < l) ? pos+1 : null;
  },

  // Get predecessor for a given node id
  // --------
  //

  getPredecessor: function(id) {
    var pos = this.getPosition(id);
    var l = this.document.get('content').nodes.length;
    return (pos-1 >= 0) ? pos-1 : null;
  },

  // Get position for a given node id
  // --------
  //

  getPosition: function(id) {
    var nodes = this.document.get('content').nodes;
    var pos = nodes.indexOf(id);
    return pos >= 0 ? pos : null;
  },

  // Get node id at a given position in the doc
  // --------
  //

  getId: function(pos) {
    var nodes = this.document.get('content').nodes;
    return nodes[pos];
  },


  // Handle for cover image upload
  // --------
  //

  // handleFileSelect: function(evt) {
  //   var that = this;
  //   evt.stopPropagation();
  //   evt.preventDefault();

  //   // from an input element
  //   var filesToUpload = evt.target.files;
  //   var file = filesToUpload[0];

  //   // this.message('Processing Image ...');

  //   // TODO: display error message
  //   if (!file.type.match('image.*')) return /*this.message('Not an image. Skipping ...')*/;

  //   var img = document.createElement("img");
  //   var reader = new FileReader();

  //   reader.onload = function(e) {
  //     img.src = e.target.result;
  //     var largeImage = img.src;

  //     _.delay(function() {
  //       var canvas = document.getElementById('canvas');
  //       var ctx = canvas.getContext("2d");
  //       ctx.drawImage(img, 0, 0);

  //       var MAX_WIDTH = 2000;
  //       var MAX_HEIGHT = 3000;
  //       var width = img.width;
  //       var height = img.height;

  //       if (width > height) {
  //         if (width > MAX_WIDTH) {
  //           height *= MAX_WIDTH / width;
  //           width = MAX_WIDTH;
  //         }
  //       } else {
  //         if (height > MAX_HEIGHT) {
  //           width *= MAX_HEIGHT / height;
  //           height = MAX_HEIGHT;
  //         }
  //       }
  //       canvas.width = width;
  //       canvas.height = height;
  //       ctx = canvas.getContext("2d");
  //       ctx.drawImage(img, 0, 0, width, height);

  //       var mediumImage = canvas.toDataURL("image/png");
  //       var mediumImageId = Substance.util.uuid();
  //       var largeImageId = Substance.util.uuid();

  //       if (!this.session.localStore.createBlob(that.model.document.id, mediumImageId, mediumImage) ||
  //           !this.session.localStore.createBlob(that.model.document.id, largeImageId, largeImage)) {
  //         throw new Substance.errors.Error('Storing images failed');
  //       }

  //       that.model.document.apply(["set", {
  //         "cover_medium": mediumImageId,
  //         "cover_large": largeImageId,
  //       }]);

  //       that.render(); // re-render the shit out of it

  //     }, 800);
  //   };

  //   reader.readAsDataURL(file);
  // },

  // Handle for cover image upload
  // --------
  //

  // bindFileEvents: function() {
  //   var that = this;
  //   _.delay(function() {
  //     that.$('.cover-file').bind('change', function(e) {
  //       that.handleFileSelect(e);
  //     });
  //   }, 200);
  // },

  // Initial view construction
  // --------
  //

  build: function() {
    this.nodes = {};

    var view = this.document.get('content');

    _.each(view.nodes, function(n) {
      var node = this.document.get(n);
      this.nodes[n] = this.createNodeView(node);
    }, this);
  },

  // Init Surface for a particular property
  // --------
  //

  initSurface: function(property) {
    var that = this;
    this.surface = new Substance.Surface({
      el: this.$('.document-'+property)[0],
      model: new Substance.Document.AnnotatedText(that.model.document, ["document", property])
    });

    // Events
    // ------

    this.surface.on('content:changed', function(content, prevContent) {
      var delta = _.extractOperation(prevContent, content);
      that.model.document.exec(Data.Graph.Update(["document", property], delta));
    });
  },

  // Initial render of all nodes
  // --------
  //

  render: function() {
    var that = this;
    var doc = that.model.document;

    var coverLarge =  null; // doc.store.getBlob(doc.properties.cover_large);
    var coverMedium = null; // doc.store.getBlob(doc.properties.cover_medium);

    that.$el.html(_.tpl('document', {
      document: that.model.document,
      cover_large: coverLarge,
      cover_medium: coverMedium
    }));

    // Init editor for document abstract and title
    that.initSurface("abstract");
    that.initSurface("title");

    _.each(this.document.get('content').nodes, function(n) {
      $(that.nodes[n].render().el).appendTo(that.$('.nodes'));
    });

    // that.bindFileEvents();
  },

  // Proper view disposal
  // --------
  //

  dispose: function() {
    console.log('disposing document view');
    this.disposeBindings();
    _.each(this.nodes, function(node) {
      node.dispose();
    });

    // unbind document property change listeners
    this.document.propertyChanges().unbind(this.viewAdapter);
    this.document.propertyChanges().unbind(this.nodeAdapter);
  }
});

// Content View Adapter
// --------
// Adapter that maps model operations to changes on the according html element
//

var ViewAdapter = function(documentView, containerSel) {
  this.documentView = documentView;
  this.containerSel = containerSel;
};
ViewAdapter.__prototype__ = function() {

  function insertOrAppend(container, pos, el) {
    var childs = container.childNodes;
    if (pos < childs.length) {
      var refNode = childs[pos];
      container.insertBefore(el, refNode);
    } else {
      container.appendChild(el);
    }
  }

  this.createNodeView = function(node) {
    return Substance.Composer.views.Node.create({
      document: this.documentView.document,
      model: node
    });
  };

  this.insert = function(pos, val) {
    var doc = this.documentView.document;
    var nodes = this.documentView.nodes;
    var container = $(this.containerSel)[0];
    var id = val;

    var nodeView = this.createNodeView(doc.get(id));
    var el = nodeView.render().el;
    nodes[id] = nodeView;

    insertOrAppend(container, pos, el);
  };

  this.delete = function(pos, nodeId) {
    var nodes = this.documentView.nodes;
    var container = $(this.containerSel)[0];
    var childs = container.childNodes;

    container.removeChild(childs[pos]);
    var view = nodes[nodeId];
    view.dispose();
    delete nodes[nodeId];
  };

  this.move = function(val, oldPos, newPos) {
    var container = $(this.containerSel)[0];
    var childs = container.childNodes;

    var el = childs[oldPos];
    container.removeChild(el);
    insertOrAppend(container, newPos, el);
  };
};
ViewAdapter.__prototype__.prototype = ot.ArrayOperation.ArrayAdapter.prototype;
ViewAdapter.prototype = new ViewAdapter.__prototype__();

// TextNode Content Adapter
// --------
// Model operations on properties that are represented as text nodes
// are transferred to changes on the according html elements.
//
var TextNodeAdapter = function(node) {
  this.node = node;
};
TextNodeAdapter.__prototype__ = function() {
  this.insert = function(pos, str) {
    // TODO: delegate to the surface
    this.node.render();
  };

  this.delete = function(pos, length) {
    // TODO: delegate to the surface
    this.node.render();
  };
};
TextNodeAdapter.__prototype__.prototype = ot.TextOperation.StringAdapter.prototype;
TextNodeAdapter.prototype = new TextNodeAdapter.__prototype__();

// This listener function is used to handle "set" and "update" operations
function onNodeContentUpdate(view, op) {
  if (op.type === "set") {
    // TODO: delegate to surface
    view.nodes[op.path[0]].render();
  } else if (op.type === "update") {
    // Note: op.diff should be a text operation
    var adapter = new TextNodeAdapter(view.nodes[op.path[0]]);
    op.diff.apply(adapter);
  }
}

DocumentView.ViewAdapter = ViewAdapter;
DocumentView.onNodeContentUpdate = onNodeContentUpdate;

// Export
// ========

Substance.Composer.views.Document = DocumentView;

})(this);
