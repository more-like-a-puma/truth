var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/:id': 'showMessage'
  },

  index: function () {
    // console.log( "Empty client-side URL, index method has run" );
    var appView = new app.AppView();
    appView.render();
  }
});
