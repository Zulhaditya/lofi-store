// slider wishlist
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    slideWidth: 100,
    loop: false,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});