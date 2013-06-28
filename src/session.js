(function(root) {

var Substance = root.Substance;
var util = Substance.util;
var _ = root._;
var Data = root.Substance.Data;
var Library = root.Substance.Library;
var MemoryStore = root.Substance.MemoryStore;
var Ken = root.Ken;

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
  this.store = new MemoryStore();
  this.library = new Library({store: this.store});

  this.seedLibrary();
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

    if (Substance.client_type === "native") {
      var settings = {
        scope: scope
      };
      return new Substance.RedisStore(settings);
    }
    if (Substance.LocalStore) {
      return new Substance.LocalStore(scope);
    }
    return new Substance.MemoryStore();
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
    } else {
      this.localStore = null;
      this.remoteStore = null;
    }
  };



  // Create a new document locally
  // Schema is optional (currently only used by testsuite)
  this.createDocument = function(schema) {
    var document = new Substance.Document({
      id: Substance.util.uuid(),
      meta: {
        "creator": this.user(),
        "created_at": new Date()
      }
    }, schema);


    // this.localStore.create(document.id, {
    //   meta: document.meta,
    //   commits: document.commits,
    //   refs: document.refs
    // });

    this.document = new Session.Document(this, document, schema);
    this.initDoc();
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


  // Load new Document from localStore
  this.loadDocument = function(id, cb) {
    var that = this;

    $.ajax({
      dataType: "jsonp",
      url: 'http://elife-converter.herokuapp.com/documents/'+id,
      success: function(eLilfeDoc) {
        // Construct on the fly

        // Start with an empty doc
        var doc = new Session.Document(that, {id: id});

        // Supports text and heading nodes
        function insert(node) {
          var id = _.htmlId(node.id).replace('-', '_');

          if (doc.nodes[id]) return; // skip existing nodes
          doc.exec(["create", {
            "id": id,
            "type": node.type,
            "content": node.content
          }]);

          // position
          doc.exec(["position", "content", {"nodes": [id], "target": -1 }]);
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

        cb(null, doc);
      },
      error: function() {
        cb('error');
      }
    });
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
    return new Substance.Replicator2({local: this.localStore, remote: this.remoteStore, remoteID: "substance.io"});
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

Session.Document = function(session, document, schema) {
  var self = this;

  this.session = session;

  // TODO: Use versioned doc
  Substance.Document.call(this, document, schema);

  this.entry = {
    get: function(property) {
      return session.library.query([self.id, property]);
    }
  };

  this.entry.get = _.bind(this.entry.get, this);
};

Session.Document.__prototype__ = function() {

  var __super__ = util.prototype(this);

  // When a doc changes, bind event handlers etc.
  this.initDoc = function() {
    this.selections = {};

    // Comments view
    this.comments = new Substance.Comments(this);

    // Register user
    this.users = {};
    this.users[this.session.user()] = {
      "color": "#2F2B26",
      "selection": []
    };
  };


  // Select document node(s)
  // Triggers re-render of comments panel etc.
  this.select = function(nodes, options) {

    if (!options) options = {};
    var user = this.session.user(); // Use current user by default

    // Do nothing if selection hasn't changed
    // It's considered a change if you operate on the same node
    // but change from edit to selection mode (options.edit check)
    if (!this.selectionChanged(user, nodes, !!options.edit)) return;

    this.edit = !!options.edit;

    if (this.users[user].selection) {
      _.each(this.users[user].selection, function(node) {
        delete this.selections[node];
      }, this);
    }

    this.users[user].selection = nodes;
    _.each(nodes, function(node) {
      this.selections[node] = user;
    }, this);

    // New selection leads to new comment context
    this.comments.compute();
    this.trigger('node:selected');
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
      // ...

      // this.library.update([self.id, "publications", ArrayOperation.Without() ])
      // this.library.update([self.id, "publications", "without", "36" ])

      that.library.delete([that.id, "publications"], pubId);

      // fehlt was
      // var cmd = Data.Array.Delete([self.id, "publications"]);

      // // mit instanz
      // var cmd = Data.Array.Delete(graph, [self.id, "publications"]);

      // var arr = graph.get([self.id, "publications"]);


      // // var Data.Array.Delete(arr, id);
      // var cmd = Data.Graph.Update(path, Data.Array.Delete(arr, id));

      // var myvar = _.without(["-1"], "-1");


      // var arr = new Data.Array();

      // Data.Array.Delete(id).apply(arr);

      // _.without(arr, 24);

      // _.without(graph, ["a", "b"], )

      // this.exec(cmd);

      // // 
      // this.library.exec(["delete", self.id, publications, id]);



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
    var that = this;
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
  this.selection = function(user) {
    if (!user) user = this.session.user();
    return this.users[user].selection;
  };

  // Returns the node id of current active node
  // Only works if there's just one node selected
  this.node = function() {
    var lvl = this.level(),
        sel = this.selection();

    if (lvl >= 2 && sel.length === 1) {
      return sel[0];
    }
  };

  // Returns current navigation level (1..3)
  this.level = function() {
    var selection = this.users[this.session.user()].selection;

    // Edit mode
    if (this.edit) return 3;

    // Selection mode (one or more nodes)
    if (selection.length >= 1) return 2;

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
      var collabs = that.session.library.resolve([that.id, "collaborators"]).get();
      collabs.push(collaborator);

      that.session.library.set([that.id, "collaborators"], collabs);

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

      // Remove collaborator from document entry
      var collabs = _.without(that.session.library.get([that.id, "collaborators"]), collaborator);
      that.session.library.set([that.id, "collaborators"], collabs);
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
    var node = this.node();

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
