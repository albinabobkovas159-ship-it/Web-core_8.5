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

const showAll = document.querySelector(".brands__show-all");
const brands = document.querySelector(".brands__swiper");
const buttonText = document.querySelector(".brands__text");

showAll.addEventListener("click", function () {
  brands.classList.toggle("expanded");
  showAll.classList.toggle("expanded");

  if (brands.classList.contains("expanded")) {
    buttonText.textContent = "Скрыть";
  } else {
    buttonText.textContent = "Показать всё";
  }
});
