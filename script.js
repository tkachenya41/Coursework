$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 300,
    easing: "ease",
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
