var app = app || {};

app.Message = Backbone.Model.extend({
  urlRoot: "/messages",

  defaults: {
    content: "",
    image: "",
    typing: ""
  },

  initialize: function () {
    console.log( "A new message was created" )
  }
});
