"use strict";

$(function () {
  //console.log('Hello Bootstrap5');
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      speed: 3000,
      disableOnInteraction: true
    } // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

  }); // 學生分享輪播

  var swiper = new Swiper(".swiper", {
    effect: "fade",
    // fadeEffect: {
    //   crossFade: true
    // },
    //grabCursor: true,
    pagination: {
      el: ".swiper-pagination" // clickable: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
//# sourceMappingURL=all.js.map
