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

  $('#menu-btn').click(function () {
    $(this).closest('header').toggleClass('menu-open');
    $('body').toggleClass('oh');
  });

  $(document).on('click', function (e) {
    if($(e.target).closest('.header.menu-open').length === 0 && $('.header.menu-open').length > 0 && $(e.target).closest('#menu-btn').length === 0) {
      $('.header').removeClass('menu-open');
      $('body').removeClass('oh');
    }
  });

  $('.nav__item-arrow').click(function (e) {
    $(this).parent('.parent').toggleClass('open');
  });

  if($(document).width() < 992){
    $('.nav__triangle').click(function (e) {
      $(this).closest('.nav__item').toggleClass('open');
    });
  }
  $(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 150) {
      $(".header").removeClass('scroll');
    } else {
      $(".header").addClass('scroll');
    }
  });


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


  $(document).on('click', '[data-tab-nav]', function (e) {
    e.preventDefault();
    var tab = $(this).attr('data-tab-nav');
    var content = $(this).closest('.menu__body-item').find('[data-tab-content="'+ tab +'"]');

    $(this).closest('.menu__body-item').find('[data-tab-nav]').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.menu__body-item').find('[data-tab-content]').removeClass('active');
    $(content).addClass('active');

    menuSlider.updateAutoHeight(300);

  })


  if($('[data-tab-card-content]').length > 0){


    $(document).on('click', '[data-tab-card]', function (e) {
      e.preventDefault();
      var tab = $(this).attr('data-tab-card');
      $('[data-tab-card]').removeClass('active');
      $(this).addClass('active');
      // $('.active[data-tab-card-content]').slideToggle();
      $('.active[data-tab-card-content]').removeClass('active');
      $('[data-tab-card-content="'+ tab + '"]').addClass('active');
    })
  }


});

