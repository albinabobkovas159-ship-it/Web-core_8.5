let swiper;
function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: false,
        speed: 500,
        spaceBetween: 0,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);
