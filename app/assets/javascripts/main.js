var app = app || {};

app.messages = new app.Messages();
app.groups = new app.Groups();
$(document).ready(function () {

  app.router = new app.AppRouter();

  Backbone.history.start();

  app.messages.fetch();
  app.groups.fetch();

  // window.setInterval(function () {
  //   app.messages.fetch();
  // }, 4000);
});
