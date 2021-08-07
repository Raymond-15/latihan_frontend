// contoh
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $("h1").css({
    transform: "translate(0px, " + wScroll + "%)",
  });
});

$(window).on("load", function () {
  $(".home").addClass("hMuncul");
});
