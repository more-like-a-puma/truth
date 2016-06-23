var app = app || {};

app.MessageInputView = Backbone.View.extend({
  el: "#messageForm",

  events: {
    'click button': 'createMessage',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function (event) {
    // checking to see if the ENTER button was pressed
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY) {
      event.preventDefault();
      this.createMessage();
    }
  },

  createMessage: function () {
    // console.log( "A message should be created" );
    var message = new app.Message();

    var userContent = this.$el.find("textarea").val();

    var imageURI = take_snapshot();

    console.log(imageURI);

    message.set({
      content: userContent,
      user_id: $("#user_id").val(),
      group_id: $("#user_target").val(),
      image: imageURI,
      user: {
          name: $("#user_name").val()
      }
    });

    message.save(); //IMPORTANT
    this.$el.find("textarea").val('').focus();

    console.log('attempting to publish');
    window.client.publish('/messages/new',{ data: message});

  },

  render: function () {

    var messageInputViewTemplate = $("#messageInputViewTemplate").html();

    this.$el.html( messageInputViewTemplate );
  }

});
