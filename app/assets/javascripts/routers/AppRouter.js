var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/:id': 'showMessages'
  },

  index: function () {
    console.log( "Empty client-side URL, index method has run" );
    var appView = new app.AppView();
    appView.render();
  }
});
