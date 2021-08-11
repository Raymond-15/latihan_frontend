// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen tujuan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html , body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 100,
    },
    1000,
    "easeInOutQuint"
  );

  e.preventDefault();
});

// parallax landing
// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();

//   $("h1").css({
//     transform: "translate(0px, " + wScroll + "%)",
//   });
// });

$(window).on("load", function () {
  $(".judul").addClass("judulMuncul");
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
