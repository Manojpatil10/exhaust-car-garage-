$(document).ready(function () {
  AOS.init();

  $(".hamburger").click(function () {
    $(".mobile-menu").css({ "left": "0px" });
  });

  $(".cancel-btn").click(function () {
    $(".mobile-menu").css({ "left": "-250px" });
  });

  $(".expertise").each(function () {
    $(this)
      .find(".expertise-1")
      .animate(
        {
          width: $(this).attr("data-width"),
        },
        2000
      );
  });

  // $(".experience-1").counterUp();

  $(".community-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
  });

  $(".answer-div").css("display", "none");
  $(".answer-div1").css("display", "none");
  $(".answer-div2").css("display", "none");
  $(".answer-div3").css("display", "none");
  $(".minus-icon").css("display", "none");
  $(".minus-icon1").css("display", "none");
  $(".minus-icon2").css("display", "none");
  $(".minus-icon3").css("display", "none");

  $(".plus-icon").click(function () {
    $(".answer-div").css("display", "block");
    $(".minus-icon").css("color", "#ddd");
    $(".plus-icon").css("display", "none");
    $(".minus-icon").css("display", "block");
  });
  $(".minus-icon").click(function () {
    $(".answer-div").css("display", "none");
    // $(".question-para").css("color","#CDD0D5");
    $(".minus-icon").css("display", "none");
    $(".plus-icon").css("display", "block");
  });

  $(".plus-icon1").click(function () {
    $(".answer-div1").css("display", "block");
    $(".minus-icon1").css("color", "#ddd");
    $(".plus-icon1").css("display", "none");
    $(".minus-icon1").css("display", "block");
  });
  $(".minus-icon1").click(function () {
    $(".answer-div1").css("display", "none");
    // $(".question-para1").css("color","#CDD0D5");
    $(".minus-icon1").css("display", "none");
    $(".plus-icon1").css("display", "block");
  });

  $(".plus-icon2").click(function () {
    $(".answer-div2").css("display", "block");
    $(".minus-icon2").css("color", "#ddd");
    $(".plus-icon2").css("display", "none");
    $(".minus-icon2").css("display", "block");
  });
  $(".minus-icon2").click(function () {
    $(".answer-div2").css("display", "none");
    // $(".question-para2").css("color","#CDD0D5");
    $(".minus-icon2").css("display", "none");
    $(".plus-icon2").css("display", "block");
  });

  $(".plus-icon3").click(function () {
    $(".answer-div3").css("display", "block");
    $(".minus-icon3").css("color", "#ddd");
    $(".plus-icon3").css("display", "none");
    $(".minus-icon3").css("display", "block");
  });
  $(".minus-icon3").click(function () {
    $(".answer-div3").css("display", "none");
    // $(".question-para3").css("color","#CDD0D5");
    $(".minus-icon3").css("display", "none");
    $(".plus-icon3").css("display", "block");
  });
});
