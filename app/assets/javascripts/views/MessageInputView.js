var app = app || {};

app.MessageInputView = Backbone.View.extend({
  el: "#messageForm",

  events: {
    'click button': 'createMessage',
    'keydown #messageText': 'checkForEnter'
  },

  checkForEnter: function (event) {
    // checking to see if the ENTER button was pressed
    app.ENTER_KEY = 13;
    app.BACKSPACE_KEY = 8
    if (event.which === app.ENTER_KEY || event.which === app.BACKSPACE_KEY) {
      event.preventDefault();
      this.createMessage();
      $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    }
  },

  createMessage: function () {
    // console.log( "A message should be created" );
    var message = new app.Message();

    var userContent = this.$el.find("#messageText").val();

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
    this.$el.find("#messageText").val('').focus();

    console.log('attempting to publish');
    window.client.publish('/messages/new',{ data: message});

  },

  render: function () {

    var messageInputViewTemplate = $("#messageInputViewTemplate").html();

    this.$el.html( messageInputViewTemplate );

  }

});
