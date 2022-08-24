"use strict";

$(function () {
  //console.log('Hello Bootstrap5');
  var swiper = new Swiper(".mySwiper", {
    //slidesPerView: 8,
    spaceBetween: 8,
    loop: true,
    autoplay: {
      speed: 3000,
      disableOnInteraction: true
    },
    breakpoints: {
      '360': {
        slidesPerView: 3
      },
      '480': {
        slidesPerView: 3
      },
      '720': {
        slidesPerView: 4
      },
      '960': {
        slidesPerView: 6
      },
      '1440': {
        slidesPerView: 8
      }
    } // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

  }); // 學生分享輪播

  var swiper = new Swiper(".swiper2", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
//# sourceMappingURL=all.js.map
