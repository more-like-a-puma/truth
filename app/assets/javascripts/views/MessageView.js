var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'li',
  render: function (counter) {
    if ( this.model.get("user") ) {
      if ( this.model.get("group_id") == $("#user_target").val() ) {
        var messageContent = this.model.get("content");
        var name = this.model.get("user").name;
        var time = moment( this.model.get("created_at") ).format('LT');
        // console.log(this.model);
        // console.log(name);
        // console.log(time);

        this.$el.text( name + " : " + messageContent + " / " + time );
        this.$el.prependTo( "#messages" );
      }
    }
  }
});
