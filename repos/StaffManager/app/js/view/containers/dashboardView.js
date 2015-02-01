define(function (require) {
  var App = require("app");
  var template = require("text!../html/containers/dashboard.html");

  return Backbone.Marionette.ItemView.extend({
    id: 'dashboard',
    tagName: 'div',
    className: '',
    template: _.template(template),
    events: {

    }

  });
});
