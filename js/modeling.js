// Content
// 1. Variable
// 2. Inisialisasi Menu
// 3. Inisialisasi Favorite
// 4. Inisialisasi Isotope Filtering

jQuery(document).ready(function ($) {
  "user strict";
  // 1.Variable
  var mainSlider = $(".main_slider");
  var hamburger = $(".hamburger_container");
  var menu = $(".hamburger_menu");
  var menuActive = false;
  var hamburgerClose = $(".hamburger_close");
  var fsOverlay = $(".fs_menu_overlay");

  initFavorite();
  initIsotopeFiltering();
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
});
