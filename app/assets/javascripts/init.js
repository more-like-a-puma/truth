
$(document).ready(function () {

  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');

  var navOut = false;

  $('.button-collapse').on("click", function() {
    if (navOut === false) {
      $("#chat").animate({
        'padding-left': "80px"
      });
      $("#slide-out").animate({
        left: "-320px"
      })
      navOut = true;
    } else {
      $("#chat").animate({
        'padding-left': "400px"
      });
      $("#slide-out").animate({
        left: "0px"
      })
      navOut = false;

    }
  });

  var drop = true;

  $(".dropdown a").on("click", function() {
    if (drop) {
      $(".dropdown li").fadeOut()
      drop = false;
    } else {
      $(".dropdown li").fadeIn()
      drop = true;
    }
  })

  var rightNavOut = false;

  $('.right-button-collapse').on("click", function() {
    if (rightNavOut === false) {
      $("#chat").animate({
        'padding-right': "0px"
      });
      $("#right-slide-out").animate({
        right: "-300px"
      })
      rightNavOut = true;
    } else {
      $("#chat").animate({
        'padding-right': "300px"
      });
      $("#right-slide-out").animate({
        right: "0px"
      })
      rightNavOut = false;

    }
  });
});
