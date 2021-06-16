// Content
// 1. Variable
// 2. Inisialisasi Menu
// 3. Inisialisasi Favorite
// 4. Inisialisasi Isotope Filtering

jQuery(document).ready(function ($) {
  "user strict";
  // 1.Variable
  var mainSlider = $(".main_slider");
  var menuActive = false;
  var fsOverlay = $(".fs_menu_overlay");

  initFavorite();
  initIsotopeFiltering();
  initSlider();

  // Hamburger menu
  const menuToggle = document.querySelector(".menu-toggle input");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });
  // 2. Inisialisasi Favorite
  function initFavorite() {
    if ($(".favorite").length) {
      var favs = $(".favorite");
      favs.each(function () {
        var fav = $(this);
        var active = false;
        if (fav.hasClass("active")) {
          active = true;
        }
        fav.on("click", function () {
          if (active) {
            fav.removeClass("active");
            active = false;
          } else {
            fav.addClass("active");
            active = true;
          }
        });
      });
    }
  }

  //   2. Inisialisasi Isotope Filtering
  function initIsotopeFiltering() {
    if ($(".grid_sorting_button").length) {
      $(".grid_sorting_button").click(function () {
        $(".grid_sorting_button.active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".product-grid").isotope({
          filter: selector,
          animationOption: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
  }
  // 6. inisialisasi slider
  function initSlider() {
    if ($(".product_slider").length) {
      var slider1 = $(".product_slider");
      slider1.owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        responsive: {
          0: { items: 1 },
          480: { items: 2 },
          768: { items: 3 },
          991: { items: 4 },
          1280: { items: 5 },
        },
      });
    }
  }
});
