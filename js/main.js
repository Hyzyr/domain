// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };

/// slick slider
const slickSettings = {
  companies: {
    slidesToShow: 6,
    infinite: true,
    autoplay: true,
    speed: 1500,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2.6,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          speed: 1000,
          autoplay: true,
        },
      },
    ],
  },
};
const getSlickSettings = (settings) => {
  return slickSettings[settings] ?? {};
};
const slickSliders = document.querySelectorAll(".slickSlider");
slickSliders.forEach((slider) => {
  const settings = slider.getAttribute("data-slick") ?? null;
  $(slider).slick(getSlickSettings(settings));
});
