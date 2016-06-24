var app = app || {};

app.Group = Backbone.Model.extend({
  urlRoot: "/groups", //IMPORTANT

  defaults: {
    title: "",
    id: ""
  },

  initialize: function () {
    // console.log( "A new message was created" )
  }
});
