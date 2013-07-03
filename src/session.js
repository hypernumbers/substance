(function(root) {

var Substance = root.Substance;
var util = Substance.util;
var _ = root._;
var Data = root.Substance.Data;
var Library = root.Substance.Library;
//var MemoryStore = root.Substance.MemoryStore;
var Ken = root.Ken;
var Chronicle = root.Substance.Chronicle;
var Document = Substance.Document;
var ot = Chronicle.ot;

// Substance.Session
// -----------------
//
// The Composer works with a session object, which maintains
// all the state of a document session
// TODO: No multiuser support yet, use app.user

var Session = function(options) {
  // an instance id to analyze problems with
  this.__id__ = util.uuid();
  this.env = options.env;
  this.chronicle = Substance.Chronicle.create(Substance.Chronicle.Index.create());
  this.initStores();
};

Session.__prototype__ = function() {

  // Temporary library seeding
  // -----------------
  //
  // TODO: remove later

  this.seedLibrary = function() {
    var ids = [];

    // Create some sample networks
    var networks = [
      {
        id: "javascript",
        type: "network",
        name: "Javascript"
      },
      {
        id: "public",
        type: "network",
        name: "Public"
      },
      {
        id: "science",
        type: "network",
        name: "Science"
      }
    ];

    _.each(networks, function(n) {
      this.library.exec(Data.Graph.Create(n));
    }, this);

    // Create some sample networks
    var publications = [
      {
        id: "pub1",
        type: "publication",
        network: "public",
        entry: "00301",
        creator: "michael"
      },
      {
        id: "pub2",
        type: "publication",
        network: "science",
        entry: "00301",
        creator: "michael"
      }
    ];

    _.each(publications, function(n) {
      this.library.exec(Data.Graph.Create(n));
    }, this);

    // Create some sample users
    var users = [
      {
        id: "michael",
        type: "user",
        name: "Michael Aufreiter"
      },
      {
        id: "oliver",
        type: "user",
        name: "Oliver Buchtala"
      },
      {
        id: "samo",
        type: "network",
        name: "Samo Korosec"
      }
    ];

    _.each(users, function(u) {
      this.library.exec(Data.Graph.Create(u));
    }, this);

    _.each(window.LIBRARY_SEED.objects, function(o) {
      var op = Data.Graph.Create({
        id: o._id,
        type: "article",
        title: o.name, // derive dynamically
        keywords: o.keywords,
        creator: "michael", // derive dynamically
        collaborators: [], // empty for now
        publications: ["pub1", "pub2"], // derive dynamically
        published_at: o.published_at, // derive dynamically
        created_at: o.published_at,
        updated_at: o.published_at
      });

      this.library.exec(op);
      ids.push(o._id);
    }, this);

    // Create my documents collection
    var op1 = Data.Graph.Create({
      id: "my_documents",
      type: "collection",
      name: "My Documents",
      documents: ids.splice(0, 40)
    });

    this.library.exec(op1);

    // Create collaborations collection
    var op2 = Data.Graph.Create({
      id: "my_collaborations",
      type: "collection",
      name: "My Collaborations",
      documents: ids.slice(10, 20)
    });
    this.library.exec(op2);
  };


  this.getUserStore = function(username) {
    var scope = username ? this.env+":"+username : this.env;

    // if (Substance.client_type === "native") {
    //   var settings = {
    //     scope: scope
    //   };
    //   return new Substance.RedisStore(settings);
    // }
    if (Substance.LocalStore) {
      return new Substance.LocalStore(scope);
    } else {
      return new Substance.MemoryStore();
    }
  };

  this.lazySync = _.debounce(function() {
    if (!this.pendingSync) return;
    this.replicate();
  }, 4000);


  this.getClient = function() {
    var token = this.token();
    var config = Substance.config();
    return new Substance.Client({
      "hub_api": config.hub_api,
      "client_id": config.client_id,
      "client_secret": config.client_secret,
      "token": token
    });
  };

  this.initStores = function() {
    var username = this.user();
    this.client = this.getClient();

    if (username) {
      this.localStore = this.getUserStore(username);
      this.remoteStore = this.client.getUserStore(username);
      this.library = new Library({store: this.localStore.subStore(["library"]), load: true});
      try {
        this.seedLibrary();
      } catch(err) {
        console.log("Library already seeded");
      }
    } else {
      this.localStore = null;
      this.remoteStore = null;
      this.library = null;
    }
  };

  this.createDocument = function() {
    // create a new store area for the persistent document graph.
    var options = {
      "id": util.uuid(),
      "creator": this.user(),
      "created_at": new Date()
    };

    options.store = this.localStore.subStore(["documents", options.id]);
    options.chronicle = Chronicle.create({store: this.localStore.subStore(["documents", options.id, "chronicle"])});

    this.document = new Session.Document(this, options);

    this.document.exec(Data.Graph.Set(["document", "title"], "Untitled"));
    this.document.exec(Data.Graph.Set(["document", "abstract"], "Enter Abstract"));
    this.document.initDoc();

    this.localStore.hash(["documents"]).set(options.id, true);

    // Register the new document in the Library
    var op = Data.Graph.Create({
      id: this.document.id,
      type: "article",
      title: this.document.title, // derive dynamically
      keywords: this.document.keywords,
      creator: this.document.creator, // derive dynamically
      created_at: this.document.created_at,
      updated_at: this.document.updated_at,
      collaborators: [], // empty for now
      publications: [], // derive dynamically
      published_at: null, // derive dynamically
    });

    this.library.exec(op);
    this.library.exec(Data.Graph.Update(["my_documents", "documents"], ot.ArrayOperation.Insert(0, this.document.id)));
    this.library.observeDocument(this.document);
  };

  this.synched = function(docId) {
    // TODO: this should not be here as it contains implementation details
    var refs = this.localStore.getRefs(docId);
    if (refs.master) {
      return refs.master.head === refs['master']['remote-head'];
    } else {
      return false;
    }
  };

  // Get Dashboard Data
  // --------
  //

  this.getDashboard = function(collection) {
    return {
      "collections": [
        this.library.get('my_documents'),
        this.library.get('my_collaborations')
      ],
      "active_collection": collection,
      "documents": new Ken.Session({
        collection: this.library.getCollection(collection).documents,
        facets: [
          {
            "property": "publications",
            "name": "Networks"
          },
          {
            "property": "keywords",
            "name": "Keywords"
          }
        ]
      })
    };
  };

  var loadElifeDocument = function(id, cb) {
    var that = this;

    $.ajax({
      dataType: "jsonp",
      url: 'http://elife-converter.herokuapp.com/documents/'+id,
      success: function(eLilfeDoc) {
        // Construct on the fly

        var options = {
          id: id
        };
        options.store = that.localStore.subStore(["documents", options.id]);
        options.chronicle = Chronicle.create({store: that.localStore.subStore(["documents", options.id, "chronicle"])});

        // Start with an empty doc
        var doc = new Session.Document(that, options);
        that.library.observeDocument(doc);

        var content = doc.get(["content", "nodes"]);

        // Supports text and heading nodes
        function insert(node) {
          var id = _.htmlId(node.id).replace('-', '_');

          if (doc.nodes[id]) return; // skip existing nodes
          doc.exec(["create", {
            "id": id,
            "type": node.type,
            "content": node.content
          }]);

          doc.exec(["update", "content", "nodes", ot.ArrayOperation.Insert(content.length, id)]);
        }

        function annotate(a) {
          var type = a.type;

          if (type === "figure_reference") type = "idea";
          if (type === "publication_reference") type = "question";
          if (type === "underline") type = "emphasis";

          if (!_.include(["idea", "question", "emphasis", "strong", "link"], type)) return; // skip
          if (a.key !== "content") return; // skip elife specific annotations

          var id = _.htmlId(a.id);
          var target = _.htmlId(a.source);

          doc.exec(["annotate", target, a.key, {
            "id": id,
            "type": type,
            "range": {start: a.pos[0], length: a.pos[1]}
          }]);
        }

        _.each(eLilfeDoc.views.content, function(n) {
          var node = eLilfeDoc.nodes[n];
          if (_.include(["text", "heading"], node.type)) {
            insert(node);
          }
        });

        // Add annotations
        _.each(eLilfeDoc.nodes, function(node) {
          annotate(node);
        });

        that.document = doc;
        that.document.initDoc();

        that.localStore.hash(["documents"]).set(id, true);

        cb(null, doc);
      },
      error: function() {
        cb('error');
      }
    });
  };

  // Load new Document from localStore
  this.loadDocument = function(id, cb) {
    var docs = this.localStore.hash(["documents"]);
    if (docs.contains(id)) {
      var options = {
        id: id
      };
      options.store = this.localStore.subStore(["documents", options.id]);
      options.chronicle = Chronicle.create({store: this.localStore.subStore(["documents", options.id, "chronicle"])});
      options.load = true;

      var doc = new Session.Document(this, options);
      this.library.observeDocument(doc);

      this.document = doc;
      this.document.initDoc();

      cb(null, doc);
    } else {
      loadElifeDocument.call(this, id, cb);
    }
  };

  this.deleteDocument = function(id) {
    this.localStore.delete(id);
  };


  // Set a property in user scope
  // --------
  //

  this.setProperty = function(key, val) {
    Substance.settings.setItem(this.env+":"+key, val);
  };

  // Read a property in user scope
  // --------
  //

  this.getProperty = function(key) {
    return Substance.settings.getItem(this.env+":"+key);
  };

  // Display logged in user
  // --------
  //

  this.user = function() {
    return this.getProperty('user') || "";
  };

  // Get current login toekn
  // --------
  //

  this.token = function() {
    return this.getProperty('api-token') || "";
  };

  // Authenticate session
  // --------
  //

  this.authenticate = function(username, password, cb) {
    var that = this;
    this.client.authenticate(username, password, function(err, data) {
      if (err) return cb(err);
      that.setProperty('user', username);
      that.setProperty('api-token', data.token);

      that.initStores();
      cb(null, data);
    });
  };

  // Replicate local docstore with remote docstore
  this.replicate = function(cb) {
    this.pendingSync = false;

    var replicator = this.createReplicator();

    this.trigger('replication:started');

    var that = this;
    replicator.sync(function(err) {
      if(err) console.log("Error during replication: ", err);
      that.trigger('replication:finished', err);
      if (cb) cb(err);
    });
  };

  // Forget login token
  // --------
  //

  this.logout = function() {
    this.localStore = null;
    this.remoteStore = null;
    this.setProperty('user', '');
    this.setProperty('api-token', '');
  };


  // Authenticated or net
  // --------
  //

  this.authenticated = function() {
    return !!this.getProperty("user");
  };

  // Create a new user on the server
  // --------
  //

  this.createUser = function(user, cb) {
    this.client.createUser(user, cb);
  };

  this.createReplicator = function() {
    return new Substance.Replicator2({
      local: this.localStore,
      remote: this.remoteStore,
      remoteID: "substance.io"
    });
  };


  // Seed local store
  // --------
  //
  // only available for testing

  this.seed = function(seedData) {
    console.log("Seeding local store", seedData);
    if (this.env !== "test") return;
    // Note: usually we do not want to use this function, only for seeding
    this.getUserStore(this.user()).impl.clear();
    _.each(seedData, function(seed, user) {
      var userStore = this.getUserStore(user);
      userStore.seed(seed);
    }, this);
  };

  // Get Data.Object from library
  // --------
  //

  this.get = function(id) {
    return this.library.get(id);
  };
};


Session.prototype = new Session.__prototype__();
_.extend(Session.prototype, util.Events);


// Substance.Session.Document
// -----------------
//
// Extends native Substance.Document for Composer needs
// E.g. adds support for selections, copy and paste etc.
// NOTE: No multi user support yet.

Session.Document = function(session, options) {
  Substance.Document.call(this, options);
  this.session = session;

  var self = this;
  this.entry = {

    // Get given property for the document entry
    // --------
    // 
    get: function(property) {
      return session.library.query([self.id, property]);
    }
  };
};

Session.Document.__prototype__ = function() {

  // When a doc changes, bind event handlers etc.
  this.initDoc = function() {
    // Comments view
    this.comments = new Substance.Comments(this);
    this.selection = new Document.Range(this, null);
  };

  // Make a new selection on the document
  // --------

  this.select = function(range) {
    this.selection = new Document.Range(this, range);
    return this.selection;
  };

  // Cut current selection from document
  // --------
  // 
  // Cutted content gets stored in clipboard as a new Substance.Document

  this.cut = function() {
    this.copy();
    this.delete();
  };

  // Delete current selection
  // --------
  // 

  this.delete = function() {
    // Convenience vars
    var startNode = this.selection.start[0];
    var startOffset = this.selection.start[1];
    var endNode = this.selection.end[0];
    var endOffset = this.selection.end[1];
    var nodes = this.selection.getNodes(this);

    var ops = []; // operations transforming the original doc

    if (nodes.length > 1) {

      // Remove trailing stuff
      _.each(nodes, function(node, index) {
        // only consider textish nodes for now
        if (node.content) {
          if (index === 0) {
            var trailingText = node.content.slice(startOffset);
            var r = [startOffset, -trailingText.length];
            // remove trailing text from first node at the beginning of the selection
            ops.push(Data.Graph.Update([node.id, "content"], ot.TextOperation.fromOT(node.content, r)));
          } else if (index === nodes.length-1) {
            // Last node of selection
            var text = node.content.slice(0, endOffset);
            var r = [-text.length];

            // remove preceding text from last node until the end of the selection
            ops.push(Data.Graph.Update([node.id, "content"], ot.TextOperation.fromOT(node.content, r)));
          } else {
            // Delete node from document
            ops.push(Data.Graph.Delete(_.clone(node)));
            var pos = this.get('content').nodes.indexOf(node.id);
            // ... and from view
            ops.push(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Delete(pos, node.id)));
          }
        }
      }, this);
    } else {
      var node = nodes[0];
      var text = node.content.slice(startOffset, endOffset);
      var r = [startOffset, -text.length];
      // remove trailing text from first node at the beginning of the selection
      ops.push(Data.Graph.Update([node.id, "content"], ot.TextOperation.fromOT(node.content, r)));
    }

    this.exec(Data.Graph.Compound(this, ops));
  };

  this.copy = function() {
    // Convenience vars
    var startNode = this.selection.start[0];
    var startOffset = this.selection.start[1];
    var endNode = this.selection.end[0];
    var endOffset = this.selection.end[1];
    var nodes = this.selection.getNodes(this);

    var clipboard = new Substance.Document({id: "clipboard"});

    if (nodes.length > 1) {
      // Remove trailing stuff
      _.each(nodes, function(node, index) {
        // only consider textish nodes for now
        if (node.content) {
          if (index === 0) {
            var trailingText = node.content.slice(startOffset);
            var r = [startOffset, -trailingText.length];

            // Add trailing text to clipboard
            var nodeId = util.uuid();
            clipboard.exec(Data.Graph.Create({
              id: nodeId,
              type: "text",
              content: trailingText
            }));
            // and the clipboards content view
            clipboard.exec(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(index, nodeId)));
          } else if (index === nodes.length-1) {
            // Last node of selection
            var text = node.content.slice(0, endOffset);
            var r = [-text.length];

            // Add selected text from last node to clipboard
            var nodeId = util.uuid();
            clipboard.exec(Data.Graph.Create({
              id: nodeId,
              type: "text",
              content: text
            }));
            clipboard.exec(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(index, nodeId)));
          } else {
            var nodeId = util.uuid();
            // Insert node in clipboard document
            clipboard.exec(Data.Graph.Create(_.extend(_.clone(node), {id: nodeId})));
            // ... and view
            clipboard.exec(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(index, nodeId)));
          }
        }
      }, this);
    } else {
      var node = nodes[0];
      var text = node.content.slice(startOffset, endOffset);

      var nodeId = util.uuid();
      clipboard.exec(Data.Graph.Create({
        id: nodeId,
        type: "text",
        content: text
      }));
      clipboard.exec(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(0, nodeId)));
    }

    // Expose clipboard to session
    this.session.clipboard = clipboard;
  };

  // Paste content from clipboard at current position
  this.paste = function() {

    this.delete();
    if (!this.session.clipboard) return;

    // After delete selection we can be sure 
    // that the collection is collapsed
    var startNode = this.selection.start[0];
    var startOffset = this.selection.start[1];

    // This is where the pasting stuff starts
    var referenceNode = this.selection.getNodes()[0];

    // Nodes from the clipboard to insert
    var nodes = this.session.clipboard.query(["content", "nodes"]);
    var ops = []; // operations transforming the original doc

    if (nodes.length > 0) {
      // Remove trailing stuff
      _.each(nodes, function(node, index) {
        // only consider textish nodes for now
        if (node.content) {
          if (index === 0) {
            var trailingText = referenceNode.content.slice(startOffset);
            var r = [startOffset, -trailingText.length, node.content];

            // remove trailing text from first node at the beginning of the selection
            ops.push(Data.Graph.Update([referenceNode.id, "content"], ot.TextOperation.fromOT(referenceNode.content, r)));

            // Move the trailing text into a new node
            var nodeId = util.uuid();
            ops.push(Data.Graph.Create({
              id: nodeId,
              type: "text",
              content: _.last(nodes).content + trailingText
            }));

            // and the clipboards content view
            ops.push(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(startNode+index+1, nodeId)));
          } else if (index === nodes.length-1) {
            // Skip
          } else {
            ops.push(Data.Graph.Create(node));
            ops.push(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(startNode+index, node.id)));
          }
        }
      }, this);
    } else {
      ops.push(Data.Graph.Update([referenceNode.id, "content"], ot.TextOperation.Insert(startOffset, node.content)));
    }

    this.exec(Data.Graph.Compound(this, ops));
  };

  // Based on current selection, insert new node
  this.insertNode = function(type) {

    if (!this.selection.isCollapsed()) {
      throw new Error('Not yet implemented for actual ranges');
    }

    var nodes = this.selection.getNodes(this);
    var node = nodes[0];

    var ops = [];

    // Remove the selection
    // TODO: implement

    // Remove trailing stuff
    var nodePos = this.selection.start[0];
    var cursorPos = this.selection.start[1];
    var trailingText = node.content.slice(cursorPos);

    if (trailingText.length > 0) {
      var r = [cursorPos, -trailingText.length];
      ops.push(Data.Graph.Update([node.id, "content"], ot.TextOperation.fromOT(node.content, r)));
    }

    var id1 = type+"_"+util.uuid();
    var id2 = "text_"+util.uuid();

    // Insert new node for trailingText
    if (trailingText.length > 0) {
      ops.push(Data.Graph.Create({
        id: id2,
        type: "text",
        content: trailingText
      }));
      ops.push(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(nodePos+1, id2)));
    }

    // Insert new empty node
    ops.push(Data.Graph.Create({
      id: id1,
      type: type
    }));
    ops.push(Data.Graph.Update(["content", "nodes"], ot.ArrayOperation.Insert(nodePos+1, id1)));

    // Execute all steps at once
    this.exec(Data.Graph.Compound(this, ops));

    return this;
  };

  this.createPublication = function(network, cb) {
    this.session.client.createPublication(this.id, network, function(err) {
      if (err) return cb(err);
      // ...
      cb(null);
    });
  };

  this.deletePublication = function(pubId, cb) {
    var that = this;
    this.session.client.deletePublication(pubId, function(err) {
      if (err) return cb(err);
      that.session.library.delete([that.id, "publications"], pubId);
      cb(null);
    });
  };


  this.createVersion = function(cb) {
    var doc = this.document;
    var data = doc.toJSON(true); // includes indexes

    var blobs = {};

    // Push document cover?
    if (doc.properties.cover_medium) {
      blobs[doc.properties.cover_medium] = doc.store.getBlob(doc.properties.cover_medium);
      blobs[doc.properties.cover_large] = doc.store.getBlob(doc.properties.cover_large);
    }

    // Find all images
    _.each(doc.nodes, function(node) {
      if (node.type === "image") {
        blobs[node.medium] = doc.store.getBlob(node.medium);
        blobs[node.large] = doc.store.getBlob(node.large);
      }
    });

    // Attach blob data to body
    data.blobs = blobs;

    // Now create version on the server
    //var that = this;
    this.client.createVersion(doc.id, data, function(err) {
      if (err) return cb(err);
      // doc.meta.published_at = new Date();
      // doc.meta.published_commit = that.chronicle.getState();
      // doc.store.update({meta: doc.meta});
      // that.loadPublications(cb);
    });
  };

  // Unpublish document
  this.unpublish = function(cb) {
    var doc = this.document;
    this.client.unpublish(doc.id, function(err) {
      if (err) return cb(err);
      delete doc.meta["published_at"];
      delete doc.meta["published_commit"];
      doc.store.update({meta: doc.meta});
    });
  };

  // Retrieve current publish state
  this.publishState = function() {
    var doc = this.document;
    if (!doc.meta.published_commit) return "unpublished";
    if (this.chronicle.getState() === doc.meta.published_commit) return "published";
    return "dirty";
  };

  // Checks if selection has actually changed for a user
  this.selectionChanged = function(user, nodes, edit) {
    // this.edit remembers the previous selection/edit state
    return !_.isEqual(nodes, this.selection(user)) || edit !== this.edit;
  };

  // Retrieve current node selection
  // this.selection = function(user) {
  //   if (!user) user = this.session.user();
  //   return this.users[user].selection;
  // };

  // Returns the node id of current active node
  // Only works if there's just one node selected
  this.node = function() {
    var lvl = this.level(),
        selectedNodes = this.selection.getNodes();


    if (lvl >= 2 && selectedNodes.length ) {
      return selectedNodes[0];
    }
  };

  // Returns current navigation level (1..3)
  this.level = function() {
    var selectedNodes = this.selection.getNodes();

    // Edit mode
    if (this.edit) return 3;

    // Selection mode (one or more nodes)
    if (selectedNodes.length >= 1) return 2;

    // no selection -> document level
    return 1;
  };


  // Create new collaborator on the server
  // --------
  //
  // Collaborator also gets registered in the library (document entry)

  this.createCollaborator = function(collaborator, cb) {
    var that = this;

    this.session.client.createCollaborator(this.id, collaborator, function(err) {
      if (err) return cb(err);

      // Update document entry
      that.session.library.exec(["push", that.id, "collaborators", collaborator]);
      cb(null);
    });
  };

  // Delete collaborator on the server
  // --------
  //
  // Collaborator also gets removed from the document entry in the library

  this.deleteCollaborator = function(collaborator, cb) {
    var that = this;
    this.session.client.deleteCollaborator(collaborator, function(err) {
      if (err) return cb(err);
      that.session.library.delete([that.id, "collaborators"], collaborator);

      cb(null);
    });
  };
};

// Inherit the prototype of Substance.Document which extends util.Events
Session.Document.__prototype__.prototype = Substance.Document.prototype;
Session.Document.prototype = new Session.Document.__prototype__();


// Comments
// -----------------
// This seems to be very UI specific and should be removed from Substance.Session

Substance.Comments = function(document) {
  this.document = document;
  this.scopes = [];
};

_.extend(Substance.Comments.prototype, _.Events, {
  compute: function(scope) {
    var node = this.document.node();
    this.scopes = [];

    var content, annotations;
    if (node) {
      var nodeData = this.document.nodes[node];
      content = nodeData.content;
      annotations = this.document.find('annotations', node);
    }
    this.commentsForNode(this.document, node, content, annotations, scope);
  },

  // Based on a new set of annotations (during editing)
  updateAnnotations: function(content, annotations) {
    var node = this.document.node();

    // Only consider markers as comment scopes
    annotations = _.filter(annotations, function(a) {
      return _.include(["idea", "question", "error"], a.type);
    });

    this.commentsForNode(this.document, node, content, annotations);
  },

  commentsForNode: function(document, node, content, annotations, scope) {
    this.scopes = [];

    // Extract annotation text from the model
    function annotationText(a) {
      if (!a.pos) return "No pos";
      return content.substr(a.pos[0], a.pos[1]);
    }

    if (node) {
      this.scopes.push({
        name: "Node",
        type: "node",
        id: "node_comments",
        comments: document.find('comments', node)
      });

      _.each(annotations, function(a) {
        if (_.include(["idea", "question", "error"], a.type)) {
          this.scopes.push({
            name: annotationText(a),
            type: a.type,
            annotation: a.id,
            id: a.id,
            comments: document.find('comments', a.id)
          });
        }
      }, this);
    } // else {
      // No document scopes for now
      // this.scopes.push({
      //   id: "document_comments",
      //   name: "Document",
      //   type: "document",
      //   comments: []
      // });
    // }
    this.document.trigger('comments:updated', scope);
  }
});

root.Substance.Session = Session;

})(this);
