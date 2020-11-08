$(".menu__btn").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("active");
  $(".menu__box").toggleClass("active");
});
