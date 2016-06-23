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
//= require webcam
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .
//= require init.js
// require private_pub

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
    var timeYo = moment(Date.now()).format('H:mm');
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

  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');

  var navOut = true;

  $('.button-collapse').on("click", function() {

    if (navOut === false) {
      $("#chat").removeClass("chatSlide");
      $("#slide-out").removeClass("slideIn");
      navOut = true;
    } else {
      $("#slide-out").addClass("slideIn");
      $("#chat").addClass("chatSlide");
      navOut = false;
    }
  });

  var drop = true;

  $("#dropdown-parent").on("click", function(e) {
    e.preventDefault();
    if (drop) {
      $(".dropdown").slideUp()
      drop = false;
    } else {
      $(".dropdown").slideDown()
      drop = true;
    }
  })

  var rightNavOut = true;

  $('.right-button-collapse').on("click", function() {
    if (rightNavOut === false) {
      $("#chat").removeClass("chatSlideRight");
      $("#right-slide-out").removeClass("rightSlideIn");
      rightNavOut = true;
    } else {
      $("#chat").addClass("chatSlideRight");
      $("#right-slide-out").addClass("rightSlideIn");
      rightNavOut = false;
    }
  });

});
