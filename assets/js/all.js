"use strict";
"use strict";

$(function () {
  var swiperDefault = new Swiper(".swiper-default", {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });
  var swiper = new Swiper(".swiper-auto", {
    slidesPerView: 4,
    spaceBetween: 8,
    //多欄
    breakpoints: {
      768: {
        slidesPerView: 6,
        spaceBetween: 8
      },
      992: {
        slidesPerView: 9,
        spaceBetween: 16
      }
    },
    speed: 2000,
    autoplay: {
      disableOnInteraction: false,
      delay: 0
    }
  }); //Effect fade

  var swiperFade = new Swiper(".swiper-fade", {
    // Optional parameters
    effect: "fade",
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    // 分頁
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // 左右箭頭
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
//# sourceMappingURL=all.js.map
