var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'li',
  render: function () {

    var messageContent = this.model.get("content");
    var name = this.model.get("user").name;
    console.log(this.model)
    console.log(name);

    this.$el.text( name + " : " + messageContent );
    this.$el.prependTo( "#messages" );
  }
});
