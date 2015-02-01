define(function (require) {
  var App = require('app');
  var MainHeader = require('views/headers/mainHeaderView');
  var Dashboard = require('views/containers/dashboardView');
  var MainFooter = require('views/footers/mainFooterView');



  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
    },
    showIndex: function () {
      App.router.navigate('');
      App.headerRegion.show(new MainHeader());
      App.contentRegion.show(new Dashboard());
      App.footerRegion.show(new MainFooter());
    }

  });
});
