let listWidth = $("#listContainer").width();
$("#slider").css("left", `-${listWidth}`);
$("#openBtn").click(() => {
  let left = $("#slider").css("left");
  if (left != "0px") {
    $("#slider").animate({ left: "0px" }, 350);
  } else {
    $("#slider").animate({ left: `-${listWidth}` }, 350);
  }
});

$("#closeBtn").click(() => {
  $("#slider").animate({ left: `-${listWidth}` }, 350);
});
$(".sliderItem a[href^='#']").click(function () {
  let aHref = $(this).attr("href");
  let secOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: secOffset - 50 }, 500);
});
$("#accordionSec h3").click(function () {
  let checker = $(this).next().css("display");
  if (checker == "none") {
    $("#accordionSec div").slideUp(500);
    $(this).css("border-bottom","none")
    $(this).next().slideDown(500);
    
  } else {
    $(this).next().slideUp(500,()=>{
        $(this).css("border-bottom","1px solid white")
    });
  }
});
let counterDown = new Date("Apr 17,2023 15:37:25").getTime();
var x = setInterval(function () {
  let now = new Date().getTime();
  let distance = counterDown - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days h3").text(days + "D");
  $("#hours h3").text(hours + "H");
  $("#minutes h3").text(minutes + "M");
  $("#seconds h3").text(seconds + "S");
});
$("#char").text(100)
$("textarea").keyup(function () {
  let demo = $(this).val();
  let withSpace = demo.length;
  let char=100-withSpace;
  if (char>0) {
      $("#char").text(char)
  }else{
    $("#char").text("your available character finished")
  }
});
