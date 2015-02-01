define(function (require) {
  var App = require("app");
  var template = require("text!../html/headers/mainHeader.html");

  return Backbone.Marionette.ItemView.extend({
    id: 'main-header',
    tagName: 'div',
    className: '',
    template: _.template(template),
    events: {

    }

  });
});
