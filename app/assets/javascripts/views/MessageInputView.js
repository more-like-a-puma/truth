var app = app || {};

app.MessageInputView = Backbone.View.extend({
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
    console.log( "A message should be created" );
    var message = new app.Message();

    var userContent = this.$el.find("textarea").val();
    message.set({
      content: userContent
    });
    message.save();
    app.messages.add( message );
    this.$el.find("textarea").val('').focus();
  },

  el: "#messageForm",

  render: function () {

    var messageInputViewTemplate = $("#messageInputViewTemplate").html();
    this.$el.html( messageInputViewTemplate );
  }

});
