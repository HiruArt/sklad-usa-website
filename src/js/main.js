var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iPhone) {
  $('body').addClass('iphone');
}
if (iPad) {
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

if (window.navigator.userAgent.indexOf("Edge") > -1) {
  $('body').addClass('edge');
}

var UAString = navigator.userAgent;
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:11") !== -1) {
  $('body').addClass('ie');
}
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:10") !== -1) {
  $('body').addClass('ie');
}


$(document).ready(function () {


  $('.reviews__read-more').click(function (e) {
    let content = $(this).closest('.reviews__item-content').children().clone();
    $('#site-popup').find('.popup__content').html("<div></div>")
    $('#site-popup').find('.popup__content div').html(content);
    $('#site-popup').find('.reviews__read-more').remove();
    $('#site-popup').addClass('open');
  });

  if ($('.site-form').length > 0) {

    $('.site-form').find('input[type="text"], textarea').each(function () {
      $(this).val().length > 0 ? $(this).parent().addClass('label-active') : $(this).parent().removeClass('label-active');
    });

    $('.site-form').find('input[type="text"], textarea').focus(function (e) {
      $(this).parent().addClass('label-active')
    });

    $('.site-form').find('input[type="text"], textarea').blur(function (e) {
      $(this).val().length > 0 ? $(this).parent().addClass('label-active') : $(this).parent().removeClass('label-active');
    });

  }

  if ($('[data-max-count]').length > 0) {

    function animateValue(id, start, end, duration) {
      if (start === end) return;
      let range = end - start;
      let current = start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let obj = document.getElementById(id);
      let timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    function showCounterChange() {
      let counterNum = $('[data-max-count]');
      counterNum.each(function () {
        let id = $(this).attr('id');
        let end = $(this).attr('data-max-count')
        animateValue(id, 0, end, 2000);
      });
    }

    let counterOffsetTop = $('[data-max-count]').offset().top;
    let screenHeight = $(window).height();
    let counterFlag = true;

    $(window).scroll(() => {
      counterOffsetTop = $('[data-max-count]').offset().top - screenHeight;

      if (counterOffsetTop < $(document).scrollTop()
        && counterFlag) {
        showCounterChange();
        counterFlag = false;
      }
    });


    if (counterOffsetTop < $(document).scrollTop() + 300
      && counterFlag) {
      showCounterChange();
      counterFlag = false;
    }
  }


  $('.js_mobile-menu').click(function () {
    $(this).closest('header').toggleClass('menu-open');
    $('body').toggleClass('oh');
    $('.mobile-menu').slideToggle();
  });

  $('.article-not-useful-form input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') && $(this).hasClass('other-reason')) {
      $('.other-reason-input').removeClass('inactive')
    } else if (!$(this).prop('checked') && $(this).hasClass('other-reason')) {
      $('.other-reason-input').addClass('inactive')
    }
  });


  if ($(window).width() > 1200) {
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

  function tariffBlockInit(){
    $(document).find('.tariff__table-item.open').find('.tariff__table-content').show();

    $(document).on('click', '.tariff__table-title', function (e) {
      $(this).parent().toggleClass('open');
      $(this).next('.tariff__table-content').slideToggle();
    });
  }

  if($('.tariff').length > 0 && $(window).width() < 992){
    tariffBlockInit()
  }

  $(window).resize(function () {
    if ($('.tariff').length > 0 && $(window).width() < 992) {
      tariffBlockInit()
    }
  });

  if ($('.js_accordion').length > 0) {
    $(document).find('.js_accordion .accordion__item.open .accordion__content').show();

    $(document).on('click', '.accordion .accordion__head', function (e) {
      $(this).parent().toggleClass('open');
      $(this).next('.accordion__content').slideToggle();
    });
  }

  if ($('.js__tooltip').length > 0) {
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

    if (dataModalId === 'calculator-popup'){
      $('body').addClass('oh');
      let dataLazyloadSrc = $('.calculator-popup').find('iframe').attr('data-lazyload-src');
      if($('.calculator-popup').find('iframe').attr('data-src') !== dataLazyloadSrc){
        $('.calculator-popup').find('iframe').attr('data-src', dataLazyloadSrc);
        $('.calculator-popup').find('iframe').addClass('lazyload');
        setTimeout(function () {
          lazySizes.init();
        }, 50);

      }
    }

    $('.popup.' + dataModalId + '').addClass('open');
  });

  $(document).on('click', '.popup__close', function (e) {

    if ($(this).closest('#site-popup').length > 0) {
      $(this).closest('#site-popup').find('.popup__content div').remove();
    }
    $('.popup ').removeClass('open');
    $('body').removeClass('oh');
  });

  $(document).on('click', '.popup', function (e) {
    if (e.target.classList[0] == "popup") {
      if ($(this).closest('#site-popup').length > 0) {
        $(this).closest('#site-popup').find('.popup__content div').remove();
      }
      $('.popup ').removeClass('open');
      $('body').removeClass('oh');
    }
  });
  /*popups end*/


  //contacts tabs

  $('.address__tab:first-child').addClass('__active');
  $('.address__tabs-items').hide();
  $('.address__tabs-items:first').show();


  function destroyCarousel() {
    if ($('.address__tabs-items').hasClass('slick-initialized')) {
      $('.address__tabs-items').slick('destroy');
    }
  }

  $('.address__tab').on('click', function (e) {
    e.preventDefault();
    $('.address__tab').removeClass('__active')
    $(this).addClass('__active')
    $('.address__tabs-items').hide();
    let activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();

    // ??????????????????????????????????????????????????????????????
    if ($(window).width() < 680) {
      destroyCarousel();
      $('.address__tabs-items').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
      })
    }
  })

  //prohibited tabs

  $('.prohibited__tab:first-child').addClass('__active');
  $('.prohibited__tabs-items').hide();
  $('.prohibited__tabs-items:first').show();

  $('.prohibited__tab').on('click', function (e) {
    e.preventDefault();
    $('.prohibited__tab').removeClass('__active')
    $(this).addClass('__active')
    $('.prohibited__tabs-items').hide();
    let activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
  });


  /***
   * Script for tabs
   */

  $(document).on("click", "[data-tab]", function (e) {
    let dataTabContentName = $(this).attr("data-tab");
    $("[data-tab]").removeClass("active");
    $(this).addClass("active");
    $("[data-tab-content]").removeClass("active");
    $("[data-tab-content=" + dataTabContentName + "]").addClass("active");
  });

  $("[data-target]").click(function(e) {
    let target = $(this).attr('data-target');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(target).offset().top - 100
    }, 1000);
  });

  /***
   * Script for tabs country
   */

  $(document).on("click", "[data-country-tab]", function (e) {
    let dataTabContentName = $(this).attr("data-country-tab");
    $("[data-country-tab]").removeClass("active");
    $(this).addClass("active");
    $("[data-country-tab-content]").removeClass("active");
    $("[data-country-tab-content=" + dataTabContentName + "]").addClass("active");
  });
});