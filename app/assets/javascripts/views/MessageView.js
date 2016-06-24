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
          this.$el.html( '<div class="content">' + name + ' at ' + time + '<div id="messageContent" class="round blue lighten-3">things</div></div>' );
        } else {
          this.$el.addClass("others");
          this.$el.html( '<div class="content">' + name + ' at ' + time + '<div id="messageContent" class="round grey lighten-3"></div></div>' );
        }

        if ( this.model.get("image") ) {
          var imageURI = this.model.get("image");

          this.$el.prependTo( "#messages" );
          this.$el.prepend('<img class="thumb" src="'+imageURI+'"/>');
          $("#messageContent").text(messageContent);

        } else {
          this.$el.prependTo( "#messages" );
          this.$el.prepend('<img class="thumb" src="http://fillmurray.com/133/100"/>');
          $("#messageContent").text(messageContent);
        }
      }
    }
  }
});
