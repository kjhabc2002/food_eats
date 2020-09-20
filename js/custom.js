// 메인화면 carosel
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
  var contents = document.getElementsByClassName("content");
  var dots = document.getElementsByClassName("dot");
  if (n > contents.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = contents.length;
  }
  for (i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  contents[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//해시태그 탭메뉴 콘텐츠
$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings("li").removeClass("active");
  var tab = $(this).attr("data_alt");
  $(".tabs div").removeClass("active");
  $("#" + tab).addClass("active");
});
