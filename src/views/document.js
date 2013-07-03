(function(root) {

var sc = root.sc;
var Substance = root.Substance;
var _ = root._;
var ot = Substance.Chronicle.ot;
var Data = Substance.Data;

sc.views.Document = Substance.View.extend({
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
    var that = this;

    this.session = this.model;
    this.document = this.session.document;

    
    // Delegate update commands
    this.document.on('command:executed', function(command) {
      switch(command.type) {
        // case "create": that.create(command.args); break;
        case "position": that.position(command.args); break;
        case "update": that.update(that.document.get(command.path[0]), command.args); break;
        case "delete": that.delete(command.args); break;
      }
    });


    this.document.on('graph:changed', function(op) {
      // console.log('graph changed', op);
      // HACK!!!! insert convenience
      if (op.ops) {
        _.each(op.ops, function(op) {
          if (_.isEqual(op.path, ["content", "nodes"])) {
            console.log('posiitoning', op);
            var diff = op.diff;
            if (diff.type === "insert") {
              that.insertNode(diff.val, diff.pos);
            } else if (diff.type === "move") {

            } else if (diff.type === "delete") {

            }

          } else if (op.path[1] === "content") {
            var node = op.path[0];
            console.log('ladies, this is an update', op);
            if (op.diff.type === ot.TextOperation.DEL) {
              console.log('TODO: deleting the shit out of it');
            } else {
              // Re-render
              that.nodes[node].render();
            }
          }
        });
      }
    });


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

    this.session.document.off('node:selected', this.updateSelections);
    this.session.document.on('node:selected', this.updateSelections, this);
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
    this.document.exec(["delete", {"nodes": this.session.selection()}]);
  },


  // Set mode accordingly
  // --------
  // 

  updateMode: function() {
    var selection = this.session.document.selection;
    $('#document').removeClass();

    if (selection.isNull()) {
      $('#document').addClass('document-mode');
    } else {
      $('#document').addClass(this.session.document.edit ? 'edit-mode' : 'structure-mode');
    }

    // Render context bar
    this.$('#context_bar').html(_.tpl('context_bar', {
      level: this.session.document.level(),
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
    _.each(this.session.document.selections, function(user, node) {
      $('#'+_.htmlId(node)).addClass('selected');
    }, this);
  },

  // Select next node
  // --------
  // 

  selectNext: function() {
    var selection = this.session.document.users[this.session.user()].selection;
    var nodes = this.document.get('content').nodes;
    if (selection.length === 0) return this.session.document.select([_.first(nodes)]);

    var nextPos = this.getSuccessor(_.last(selection));
    if (nextPos !== null) return this.session.document.select([this.getId(nextPos)]);
  },

  // Select previous node
  // --------
  // 

  selectPrev: function() {
    var selection = this.session.document.users[this.session.user()].selection;
    var nodes = this.document.get('content').nodes;
    if (selection.length === 0) return this.session.document.select([_.last(nodes)]);
    var prevPos = this.getPredecessor(_.last(selection));
    if (prevPos !== null) return this.session.document.select([this.getId(prevPos)]);
  },

  // Expand current selection
  // --------
  // 

  expandSelection: function() {
    var selection = this.session.document.users[this.session.user()].selection;
    var lastnode = _.last(selection);
    var doc = this.document;

    if (lastnode) {
      var next = this.getId(this.getSuccessor(lastnode));
      if (next) {
        this.session.document.select(selection.concat([next]));
      }
    }
  },

  // Narrow current selection
  // --------
  // 

  narrowSelection: function() {
    var selection = this.session.document.users[this.session.user()].selection;
    this.session.document.select(_.clone(selection).splice(0, selection.length-1));
  },


  // Move selection down by one
  // --------
  // 

  moveDown: function() {
    var selection = this.session.document.users[this.session.user()].selection;
    var target = this.getSuccessor(_.last(selection));
    if (target !== null) this.document.exec(["position", "content", {"nodes": selection, "target": target}]);
  },

  // Move selection up by one
  // --------
  // 

  moveUp: function() {
    var selection = this.session.document.users[this.session.user()].selection;
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
    this.session.document.select([id]);
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


  insertNode: function(id, pos) {
    // function insertAppend(successor, el, ch) {
    //   if (successor) {
    //     el.insertBefore(ch, successor);
    //   } else {
    //     el.appendChild(ch);
    //   }
    // }
    var nodeView = this.createNodeView(this.model.document.get(id));
    var el = nodeView.render().el;
    this.nodes[id] = nodeView;
    console.log('inserting', nodeView);
    var container = $('#document .nodes')[0];
    var childs = container.childNodes;
    if (pos < childs.length) {
      console.log('insert before...', container);
      var refNode = childs[pos];
      console.log('refnode', refNode);
      container.insertBefore(el, refNode);
    } else {
      container.appendChild(el);
    }

    // console.log('meh', contentContainer);
  },

  moveNode: function() {

  },

  deleteNode: function() {

  },

  // Arrange content nodes
  // --------
  // 

  position: function(options) {
    var that = this;

    // console.log('positioning..');
    // remember new node (needs focus afterwards)
    var newNode = null;

    var selection = (_.map(options.nodes, function(n) {
      var el = that.$('#'+n)[0];
      if (el) return el;

      // Fresh node detected, construct first
      var nodeView = that.createNodeView(that.document.get(n))
      newNode = nodeView.el;
      that.nodes[n] = nodeView;
      return nodeView.render().el;
      
    }));


    function moveSelection(selection, pos) {
      // 1. remove selection from the DOM
      $(selection).remove();

      // 2. compute reference node
      var target = that.$('.content-node')[pos];

      // 3. inject elements
      if (target) {
        $(selection).insertBefore($(target));  
      } else {
        $(selection).appendTo(that.$('.nodes'));
      }
    }

    moveSelection(selection, options.target);

    if (newNode) {
      $(newNode).click();
      $(newNode).find('.content').focus(); // activate focus
    }
  },

  // Update node after content has changed
  // --------
  // 

  update: function(node, options) {
    var baseType = this.document.schema.baseType(node.type);
    if (baseType !== "content") return; // skip non-content nodes

    // Only rerender if update comes from outside
    if (this.session.document.node() !== node.id) {
      node.render();
    }
  },

  // Called after nodes have been deleted from the document
  // --------
  // 

  delete: function(options) {
    _.each(options.nodes, function(n) {
      this.$('#'+n).remove();
      var view = this.nodes[n];
      view.dispose();
      delete this.nodes[n];
    }, this);
    this.session.document.select([]);
  },




  // Utilities
  // ================

  // For a given node object create the corresponding view
  // --------
  // 

  createNodeView: function(node) {
    return sc.views.Node.create({
      document: this.session.document,
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
  }
});

})(this);
