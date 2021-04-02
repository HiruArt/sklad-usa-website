var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(iPhone){
    $('body').addClass('iphone');
}
if(iPad){
    $('body').addClass('ipad');
}
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    // alert("1") // Chrome
  } else {
    // alert("2") // Safari
    $('body').addClass('safari');
  }
}

if(window.navigator.userAgent.indexOf("Edge") > -1) {
  $('body').addClass('edge');
}

var UAString = navigator.userAgent;
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:11") !== -1)
{
  $('body').addClass('ie');
}
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:10") !== -1)
{
  $('body').addClass('ie');
}


$(document).ready(function () {

  $('.js_mobile-menu').click(function () {
    $(this).closest('header').toggleClass('menu-open');
    $('body').toggleClass('oh');
    $('.mobile-menu').slideToggle();
  });


  if($(window).width() > 1200) {

    let scrollDown;

    (function () {
      let previousScroll = 0;
      $(window).scroll(() => {
        let currentScroll = $(this).scrollTop();
        currentScroll > previousScroll ? scrollDown = true : scrollDown = false;
        previousScroll = currentScroll;
      });
    }());

    $(document).scroll(function () {
      let top = $(document).scrollTop();
      if (top < 150 || scrollDown) {
        $(".top-arrow").removeClass('show');
      } else {
        $(".top-arrow").addClass('show');
      }
    });


    $(document).on('click', '.js_top-arrow', function (e) {
      $('html,body').animate({scrollTop: 0}, 800);
    });
  }

  /*popups start*/
  $(document).on('click', '[data-modal-class]', function (e) {
    e.preventDefault();
    var dataModalId = $(this).attr('data-modal-class');
    $('.popup.' + dataModalId + '').addClass('open');
  });

  $(document).on('click', '.popup__close', function (e) {
    $('.popup ').removeClass('open');
  });

  $(document).on('click', '.popup', function (e) {
    if(e.target.classList[0] == "popup") {
      $('.popup ').removeClass('open');
    }
  });
  /*popups end*/

});

