"use strict";

var _ = require("underscore");

// Helpers
// ---------------

// A fake console to calm down some browsers.
if (!window.console) {
  window.console = {
    log: function(msg) {
      // No-op
    }
  };
}

// Render Underscore templates
_.tpl = function (tpl, ctx) {
  var source = $('script[name='+tpl+']').html();
  // var source = templates[tpl];
  return _.template(source, ctx);
};


// Get a valid HTML Id for a given content node
// --------------

_.htmlId = function(node) {
  node = _.isObject(node) ? node.id : node;
  return node.split(':').join('_');
};


// Silly op code extraction for the history view
// --------------

_.opcode = function(operation) {
  var type = operation.op[1].type;
  return type ? type[0] : "*";
};

  // Util
  // ---------

  // Given an original text and a changed text, compute an operation reflecting
  // the changes.

_.extractOperation = function(baseText, newText) {
  var dmp = new diff_match_patch();

  var changes = dmp.diff_main(baseText, newText);
  var ops = [];

  function mapOp(change) {
    var m = change[0],
        d = change[1];

    return m === 1 ? d : (m === -1 ? -1*d.length : d.length)
  }

  return _.map(changes, mapOp);
}

// Error Notifications
// -----------------

function notify(type, message) {
  $('#document_menu .error-message').html(message).show();
  setTimeout(function() {
    $('#document_menu .error-message').fadeOut();
  }, 2000);
}
