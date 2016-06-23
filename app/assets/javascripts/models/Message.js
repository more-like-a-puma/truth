var app = app || {};

app.Message = Backbone.Model.extend({
  urlRoot: "/messages", //IMPORTANT

  defaults: {
    user_id: "",
    content: "",
    image: "",
    typing: ""
  },

  initialize: function () {
    // console.log( "A new message was created" )
  }
});
