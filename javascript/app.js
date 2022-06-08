function fadeOutSplashScreen() {
  $("#splash-screen").fadeOut();
  setTimeout(function() {
    $("#home-screen").fadeIn();
  }, 1000);
}

function transitionCard(newCard, newTab) {
  var currentTab = $(".active-link");
  var allCards = $(".card");

  currentTab.removeClass("active-link");
  currentTab.addClass("list-group-item");

  $(newTab).addClass("active-link");

  allCards.hide();
  $(newCard).fadeIn();
}