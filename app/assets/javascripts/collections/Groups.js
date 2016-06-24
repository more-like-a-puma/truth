var app = app || {};

app.Groups = Backbone.Collection.extend({

  url: "/groups",

  model: app.Group,

  initialize: function () {
    // console.log( "A new messages collection was added" );

    this.on("add", function (group) {
      // console.log("NEW MESSAGE JUST RECEIVED!");
      // console.log( message.toJSON().user );

      groupView = new app.GroupView({
          model: group
      });
      // messageView.render();
      // $('html, body').stop().animate({scrollTop: $(document).height()}, 'slow');

      // window.client.publish('/groups/new',{ data: title });

      // console.log(this.model.get("title"));

      // $("#dropdown").append("<li>" +  + "</li>");

      groupView.render();


    });

  }
});
