require.config({
  waitSeconds: 200,
  paths: {
    //Libraries
    'bootstrap': '../lib/bootstrap-sass/assets/javascripts/bootstrap',
    'jquery': '../lib/jquery/dist/jquery',
    'underscore': '../lib/underscore/underscore',
    'backbone': '../lib/backbone/backbone',
    'backbone.wreqr': '../lib/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../lib/backbone.babysitter/lib/backbone.babysitter',
    'history-event': 'util/backbone.historyevent',
    'marionette': '../lib/marionette/lib/core/amd/backbone.marionette',
    'bootstrap-toggle': '../lib/bootstrap-toggle/js/bootstrap-toggle.min',

    //Plugins
    'text': '../lib/requirejs-text/text'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'bootstrap-toggle':{
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'router', 'controllers/popupController'], function (App, Router, PopupController) {
  App.addInitializer(function () {
    this.router = new Router();
    this.popups = new PopupController();
    this.vent.trigger('route:startup');
  });
  App.start();
});
