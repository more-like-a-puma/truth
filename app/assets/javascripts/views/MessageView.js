var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'li',
  render: function () {
    if ( this.model.get("user") ) {
      var messageContent = this.model.get("content");
      var name = this.model.get("user").name;
      var time = moment( this.model.get("created_at") ).fromNow();
      console.log(this.model);
      console.log(name);
      console.log(time);
      // debugger;
      // console.log(time);

      this.$el.text( name + " : " + messageContent + " / " + time );
      this.$el.prependTo( "#messages" );
    }
  }
});
