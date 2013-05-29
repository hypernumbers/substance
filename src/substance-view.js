(function(root) { "use_strict";

var Substance = root.Substance;
var _ = root._;
var Backbone = root.Backbone;

var View = function(options) {
  Backbone.View.apply(this, [options]);

  // Initialization
  this._bindings = [];
  this.delegateMessages();
  this.delegateBindings();
};

View.__prototype__ = function() {

  // Delegats global messags based on spec
  this.delegateMessages = function() {

    _.each(this.messages, function(handler, message) {
      Substance.app.bind('message:'+message, this[handler], this);
      // Register binding for later disposal
      this._bindings.push([Substance.app, 'message:'+message, this[handler]]);
    }, this);
  };

  // Delegate bindings as speced
  this.delegateBindings = function() {
    _.each(this.bindings, function(binding) {
      var props = binding[0].split('.');
      var eventName = binding[1];
      var handler = this[binding[2]];
      var target = this;

      if (props.length > 0 && props[0] !== "this") {
        _.each(props, function(p) {
          target = target[p];
        });
      }
      target.bind(eventName, handler, this);
      // Register binding for later disposal
      this._bindings.push([target, eventName, handler]);
    }, this);
  };

  // Unbind handlers
  this.disposeBindings = function() {
    _.each(this._bindings, function(b) {
      var target = b[0];
      var eventName= b[1];
      var handler = b[2];

      target.unbind(eventName, handler);
    });
  };
};

View.__prototype__.prototype = Backbone.View.prototype;
View.prototype = new View.__prototype__();
View.extend = Backbone.View.extend;


Substance.View = View;

})(this);
