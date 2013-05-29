(function(root) {

// All Substance singletons should be defined here

var Substance = {};

// Holds all available configurations
Substance.configurations = {};

// A settings instance
Substance.settings = null;
Substance.client_type = null;

Substance.config = function() {
  var env = Substance.settings.getItem('env');
  return Substance.configurations[env];
};

// Helpers
// -----------------

Substance.published = function(doc) {
  return !!doc.meta.published_commit;
};

// Initialization
// -----------------

Substance.initSession = function(env) {
  Substance.session = new Substance.Session({env: env});
};

// Other namespaces
// -----------------

Substance.test = {}

root.Substance = Substance;

})(this);
