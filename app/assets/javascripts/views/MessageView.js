var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'li',
  render: function () {
    if ( this.model.get("user") ) {

      if ( this.model.get("group_id") == $("#user_target").val() ) {
        var messageContent = this.model.get("content");
        var name = this.model.get("user").name;

        var id = this.model.get("user_id");
        var time = moment( this.model.get("created_at") ).format('LT');
        console.log(this.model);
        console.log(name);
        console.log(time);

        if (id == user_id.value) {
          this.$el.addClass("yours");
        } else {
          this.$el.addClass("others");
        }

        if ( this.model.get("image") ) {
          var imageURI = this.model.get("image");
          this.$el.html( name + " : " + messageContent + " / " + time + '<img src="'+imageURI+'"/>' );
          this.$el.prependTo( "#messages" );
        } else {
          this.$el.html( name + " : " + messageContent + " / " + time );
          this.$el.prependTo( "#messages" );
        }
      }
    }
  }
});
