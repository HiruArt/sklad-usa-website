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

  $('.article-not-useful-form input[type="checkbox"]').click(function () {
    if($(this).prop('checked') && $(this).hasClass('other-reason')) {
      $('.other-reason-input').removeClass('inactive')
    } else if(!$(this).prop('checked') && $(this).hasClass('other-reason')){
      $('.other-reason-input').addClass('inactive')
    }
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

  $(window).resize(function() {

    if ($('.tariff').length > 0 && $(window).width() < 992) {
      $(document).find('.tariff__table-item.open').find('.tariff__table-content').show();

      $(document).on('click', '.tariff__table-title', function (e) {
        $(this).parent().toggleClass('open');
        $(this).next('.tariff__table-content').slideToggle();
      });
    }
  });

  if($('.js_accordion').length > 0){
    $(document).find('.js_accordion .accordion__item.open .accordion__content').show();

    $(document).on('click', '.accordion .accordion__head', function (e) {
      $(this).parent().toggleClass('open');
      $(this).next('.accordion__content').slideToggle();
    });
  }

  if($('.js__tooltip').length > 0){
    tippy('.js__tooltip', {
      content(reference) {
        const id = reference.getAttribute('data-template');
        const template = document.getElementById(id);
        return template.innerHTML;
      },
      theme: 'custom',
      allowHTML: true,
      // trigger: 'click',
      maxWidth: 320,
      role: 'tooltip',
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


  //contacts tabs

  $('.address__tab:first-child').addClass('__active');
  $('.address__tabs-items').hide();
  $('.address__tabs-items:first').show();

  $('.address__tab').on('click', function(e) {
    e.preventDefault();
    $('.address__tab').removeClass('__active')
    $(this).addClass('__active')
    $('.address__tabs-items').hide();
    let activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
  })

});

