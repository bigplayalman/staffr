define(['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap', 'history-event', ], function () {

  var App = new Backbone.Marionette.Application();

  App.name = 'staffr-app';
  App.version = '1.0.0';

  App.addRegions({
    contentRegion: '#content',
    headerRegion: '#header',
    footerRegion: '#footer',
    modalRegion: '#modal'
  });

  App.vent.on('route:startup', function () {
    Backbone.history.start();
  });

  //#################################  LOGIN Methods  ###################################

  App.login = function (username, password) {
    $('.alert').alert('close');
    var user = {"username": username, "password": password};
  };

  App.isLoggedIn = function () {
  };

  App.logout = function () {
  };

  return App;

});
