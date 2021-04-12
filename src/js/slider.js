$(document).ready(function(){

  if($('.js_cooperation__slider').length > 0 && $(window).width() > 1100) {
    $('.js_cooperation__slider').slick({
      infinite: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint:800,
          settings: {
            slidesToShow: 1.05,
            slidesToScroll: 1,
          }
        }

      ]
    });
  }

  if($('.js_slider-reviews').length > 0) {
    $('.js_slider-reviews').slick({
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1.05,
            slidesToScroll: 1,
          }
        }

      ]
    });
  }

});