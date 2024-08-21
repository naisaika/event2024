'use strict';

const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://docs.google.com/forms/d/e/1FAIpQLScmsOECJ1d-vJuuKgCpbYwdPvpu6h6DIf-S7Xtt6eyuVmdTrQ/viewform",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

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
  $(".entry-btn").on("inview", function (event, isInView) {
      if (isInView) {
          const element = $(this);
          element.addClass("entry-btn--inview");

          setTimeout(function () {
              element.addClass("entry-btn--anime");
          }, 2000);

          setTimeout(function () {
              element.removeClass("entry-btn--anime");
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
  $(".info-detail").on("inview", function (isInView) {
      if (isInView) {
          $(".info-line__width").addClass("info-line__width--inview");
          $(".info-line__width").off("inview"); 
      }
  });
});

$(function () {
  $(".info-detail").on("inview", function (isInView) {
      if (isInView) {
          $(".info-line__height").addClass("info-line__height--inview");
          $(".info-line__height").off("inview"); 
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
