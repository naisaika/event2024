'use strict';

$(function(){
    $('a[href^="#"]').click(function(){
      const adjust = -($(window).height() * 0.1);
      const speed = 100;
      const href= $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});

$(function () {
  $(".top-title").on("inview", function (isInView) {
      if (isInView) {
          $(this).addClass("top-title--inview");
          $(this).off("inview"); 
      }
  });
});

$(function () {
  $(".top-info").on("inview", function (isInView) {
      if (isInView) {
          $(this).addClass("top-info--inview");
          $(this).off("inview"); 
      }
  });
});

$(function () {
  $(".archive-btn").on("inview", function (event, isInView) {
      if (isInView) {
          const element = $(this);
          element.addClass("archive-btn--inview");

          setTimeout(function () {
              element.addClass("archive-btn--anime");
          }, 2000);

          setTimeout(function () {
              element.removeClass("archive-btn--anime");
          }, 3000);

          $(this).off("inview"); 
      }
  });
});

$(function () {
    $(".sh-person").on("inview", function (isInView) {
        if (isInView) {
            $(".sh-person").addClass("sh-person--inview");
            $(".sh-person").off("inview"); 
        }
    });
  });

$(function () {
  $(".announce-title__sub__text").on("inview", function (isInView) {
      if (isInView) {
          $(".announce-line__width").addClass("announce-line__width--inview");
          $(".announce-line__width").off("inview"); 
      }
  });
});

$(function () {
  $(".announce-title__sub__text").on("inview", function (isInView) {
      if (isInView) {
          $(".announce-line__height").addClass("announce-line__height--inview");
          $(".announce-line__height").off("inview"); 
      }
  });
});

$(function () {
  $(".speech-container").on("inview", function (isInView) {
      if (isInView) {
          $(".speech-line__width1").addClass("speech-line__width1--inview");
          $(".speech-line__width1").off("inview"); 
      }
  });
});

$(function () {
  $(".speech-container").on("inview", function (isInView) {
      if (isInView) {
          $(".speech-line__height1").addClass("speech-line__height1--inview");
          $(".speech-line__height1").off("inview"); 
      }
  });
});

$(function () {
  $(".speech-container2").on("inview", function (isInView) {
      if (isInView) {
          $(".speech-line__width2").addClass("speech-line__width2--inview");
          $(".speech-line__width2").off("inview"); 
      }
  });
});

$(function () {
  $(".speech-container2").on("inview", function (isInView) {
      if (isInView) {
          $(".speech-line__height2").addClass("speech-line__height2--inview");
          $(".speech-line__height2").off("inview"); 
      }
  });
});

$(function () {
  $(".feedback-list").on("inview", function (isInView) {
      if (isInView) {
          $(".feedback-line__width").addClass("feedback-line__width--inview");
          $(".feedback-line__width").off("inview"); 
      }
  });
});

$(function () {
  $(".feedback-list").on("inview", function (isInView) {
      if (isInView) {
          $(".feedback-line__height").addClass("feedback-line__height--inview");
          $(".feedback-line__height").off("inview"); 
      }
  });
});