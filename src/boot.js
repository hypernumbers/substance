// Gets called when the DOM is ready
$(function() { "use_strict";

  var root = window;
  var Substance = root.Substance;
  var Backbone = root.Backbone;
  var Router = root.Router;

  // All singleton variables are in this file
  // TODO: make this true

  // Load config from config.json
  function loadConfigurations(cb) {
    var file = Substance.client_type === "browser" ? '/config.json' : 'config.json';
    $.getJSON(file, function(data) {
      Substance.configurations = data;
      cb(null, data);
    })
    .error(function() {
      cb('not_found: using defaults');
    });
  }

  if(typeof redis === 'undefined') {
    Substance.client_type = "browser";
  } else {
    Substance.client_type = "native";
  }

  if (Substance.client_type === "browser") {
    Substance.settings = new Substance.WebAppSettings();
  } else {
    Substance.settings = new Substance.NativeAppSettings();
  }

  loadConfigurations(function(err, configs) {
    Substance.configurations = JSON.parse(JSON.stringify(configs));
    delete Substance.configurations.env;

    // Initially set env based on config value
    if (!Substance.settings.getItem('env')) {
      Substance.settings.setItem('env', configs.env || 'development');
    }

    Substance.initSession(Substance.settings.getItem('env'));

    // Start the engines
    Substance.app = new Substance.Application({
      el: 'body',
      model: Substance.session
    });
    Substance.router = new Router({});

    Backbone.history.start();
  });

});
