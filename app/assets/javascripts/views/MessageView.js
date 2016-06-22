var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'li',
  render: function (counter) {
    if ( this.model.get("user") ) {
      if ( this.model.get("group_id") == $("#user_target").val() ) {
        var messageContent = this.model.get("content");
        var name = this.model.get("user").name;

        var id = this.model.get("user_id");
        var time = moment( this.model.get("created_at") ).fromNow('LT');
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
          this.$el.html( '<div class="content"><div class="round blue lighten-3">' + messageContent + '</div></div>' );
          this.$el.prependTo( "#messages" );
          this.$el.prepend('<img class="thumb" src="'+imageURI+'"/>')
        } else {
          this.$el.html( name + " : " + messageContent + " / " + time );
          this.$el.prependTo( "#messages" );
        }
      }
    }
  }
});
