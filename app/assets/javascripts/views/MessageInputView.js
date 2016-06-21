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
    console.log( "A message should be created" );
    var message = new app.Message();

    var userContent = this.$el.find("textarea").val();
    var userName = $("#name").text().trim();
// debugger;
    message.set({
      content: userContent,
      name: userName
    });

    message.save();
    app.messages.add( message );
    this.$el.find("textarea").val('').focus();
  },

  render: function () {

    var messageInputViewTemplate = $("#messageInputViewTemplate").html();

    this.$el.html( messageInputViewTemplate );
  }

});
