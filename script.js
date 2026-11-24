const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  spaceBetween: 20,
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
