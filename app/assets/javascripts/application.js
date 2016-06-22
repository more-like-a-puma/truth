// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require moment
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(function() {


  var dayFun = function () {
    var day = moment(Date.now()).format('dddd');
    $("#dayName").text(day);
  };

  var dateFun = function () {
    var date = moment(Date.now()).format("MMM Do");
    $("#dayDate").text(date);
  };

  var timeFun = function () {
    var timeYo = moment(Date.now()).format('h:mm:ss a');
    $("#timeYo").html(timeYo);
  };

  var updateTime = function () {
    timeFun();
    dayFun();
    dateFun();
  }

  window.setInterval(updateTime, 100);


  var userTarget = $("#user_target").val()
  var curChannel = '/messages/new/' + userTarget

  if ( window.location.port === "3000" ) {
    var port = ":9292";
  }

  var faye = new Faye.Client(window.location.protocol + "//" + window.location.hostname + port + '/faye');
  faye.subscribe(curChannel, function (data) {
    app.messages.add(data);
  });
});
