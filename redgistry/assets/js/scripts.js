jQuery(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".navbar").toggleClass("show");
    $("body").toggleClass("manage-page");
  });

  function makeTimer() {
    var endTime = new Date("03 November 2020 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (days < "10") {
      hours = "0" + days;
    }
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days + "<span>Jours</span>");
    $("#hours").html(hours + "<span>Heures</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Secondes</span>");
  }

  setInterval(function () {
    makeTimer();
  }, 1000);
});

// Font increase

$("#increasetext").click(function () {
  curSize = parseInt($("#content").css("font-size")) + 2;
  if (curSize <= 32) $("#content").css("font-size", curSize);
});

$("#decreasetext").click(function () {
  curSize = parseInt($("#content").css("font-size")) - 2;
  if (curSize >= 14) $("#content").css("font-size", curSize);
});

// change bg

function chanebgBlue() {
  // var element = document.querySelectorAll("div.main-menu, body, p, h1, h2, h3, h4, html");
  var element = document.getElementById("content");
  element.classList.remove("black-bg");
  element.classList.add("blue-bg");
}

function chanebgBlack() {
  var element = document.getElementById("content");
  element.classList.remove("blue-bg");
  element.classList.add("black-bg");
}

function removeClass() {
  var element = document.getElementById("content");
  element.classList.remove("blue-bg");
  element.classList.remove("black-bg");
}
