var app = app || {};

app.GroupView = Backbone.View.extend({
  tagName: 'li',
  render: function () {

    var userId = $("#user_id").val();

    var groupId = this.model.get("id");

    this.$el.html("<a rel='nofollow' data-method='put' href='/users/" + userId + "?user%5Btarget%5D=" + groupId + "' id='" + this.model.get("title") + "'>" + this.model.get("title") + "</a>");
    // this.$el.text(this.model.get("title"))
    this.$el.appendTo(".dropdown");
  }
});
