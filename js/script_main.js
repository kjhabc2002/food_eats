//1. gnb 마우스오버, 포커스시 밑줄 -> span.bar
$(function () {
  $(".gnb li a").on("mouseenter focus", function () {
    var bar = $(this).position().left;
    var widNum = $(this).width();
    $("span.bar").css({
      left: bar + "px",
      width: widNum + "px",
      opacity: 1,
    });
  });
  $(".gnb li a").on("mouseleave", function () {
    $("span.bar").css({ left: 0, width: 0, opacity: 0 });
  });
});

$(function () {
  $(".address li a").on("mouseenter focus", function () {
    var bar = $(this).position().left;
    var widNum = $(this).width();
    $("span.bar").css({
      left: bar + "px",
      width: widNum + "px",
      opacity: 1,
    });
  });
  $(".address li a").on("mouseleave", function () {
    $("span.bar").css({ left: 0, width: 0, opacity: 0 });
  });
});
// 2.햄버거 메뉴
$(function () {
  $(".menuOpen button.open").on("click", function () {
    $(".menuOpen .menuWrap").addClass("on");
  });
  $(".menuOpen .menuWrap .close").on("click", function () {
    $(".menuOpen .menuWrap").removeClass("on");
  });
});

// 3.스크롤애니메이션
$(function () {
  $(".animate").scrolla({
    mobile: true, //모바일 버전시 활성화
    once: true, // 스크롤시 딱 한번만 하고 싶을땐 true
  });
});

//4. 쿠폰 탭 슬라이드
