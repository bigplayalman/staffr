define(function (require) {
  var App = require("app");
  var template = require("text!../html/footers/mainFooter.html");

  return Backbone.Marionette.ItemView.extend({
    id: 'main-footer',
    tagName: 'div',
    className: '',
    template: _.template(template),
    events: {

    }

  });
});
