var app = app || {};

app.messages = new app.Messages();

$(document).ready(function () {
  
  app.router = new app.AppRouter();

  Backbone.history.start();

  app.messages.fetch();

  // window.setInterval(function () {
  //   app.messages.fetch();
  // }, 4000);
});
