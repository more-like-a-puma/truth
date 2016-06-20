var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {
    console.log( "App view rendering" );
    var appViewTemplate = $("#appViewTemplate").html();
      this.$el.html( appViewTemplate );

    var messageInputView = new app.MessageInputView();
    messageInputView.render();
  }
});
