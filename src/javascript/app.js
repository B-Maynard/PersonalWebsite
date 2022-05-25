function fadeOutSplashScreen() {
  $("#splash-screen").fadeOut();
  setTimeout(function() {
    $("#home-screen").fadeIn();
  }, 1000);
}