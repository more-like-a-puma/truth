var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'li',
  render: function () {

    var content = this.model.get("content");

    this.$el.text( content );
    this.$el.prependTo( "#messages" );
  } 
});
