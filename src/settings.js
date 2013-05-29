(function(root) {

var Substance = root.Substance;
var _ = root._;

// AppSettings
// -----------------
//
// Persistence for application settings

var NativeAppSettings = function(settings) {
  var redis = root.redis;
  var dbSettings = {
    host: "127.0.0.1",
    port: 6379,
    scope: "substance:app-settings"
  };

  // override the default values if given
  dbSettings = _.extend(dbSettings, settings);

  this.db = redis.RedisAccess.Create(0);
  this.db.setHost(dbSettings.host);
  this.db.setPort(dbSettings.port);
  this.db.connect();
  this.db.setScope(dbSettings.scope);

  var hash = this.db.asHash("data");

  this.setItem = function(key, value) {
    hash.set(key, value);
  };

  this.toJSON = function() {
    var res = {};
    _.each(hash.getKeys(), function(key) {
      res[key] = this.get(key);
    }, this);
    return res;
  };

  this.getItem = function(key) {
    return hash.getJSON(key);
  };
};

var WebAppSettings = function() {
  var localStorage = root.localStorage;

  this.setItem = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  this.toJSON = function() {
    var json = JSON.stringify(localStorage);
    return json;
  };

  this.getItem = function(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.log("Localstore contains illegal value.");
      return null;
    }
  };
};

Substance.NativeAppSettings = NativeAppSettings;
Substance.WebAppSettings = WebAppSettings;

})(this);
