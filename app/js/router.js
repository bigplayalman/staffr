define(function (require) {
  var App = require('app');
  var BaseController = require('controllers/baseController');
  var PopupController = require('controllers/popupController');

  return Backbone.Marionette.AppRouter.extend({
    routeGroups: {
      base: {
        controller: new BaseController(),
        routes: {
          '': 'showIndex'
        }
      },
      popup: {
        controller: new PopupController()
      }
    },
    initialize: function () {
      _.each(this.routeGroups, function (router) {
        this.processAppRoutes(router.controller, router.routes);
      }, this);
    },
    getController: function (id) {
      return this.routeGroups[id].controller;
    },
    onRoute: function () {
      if (!App.isLoggedIn()) {
        this.navigate('#login');
        this.getController('base').showLogin();
      }
    }
  });
});
