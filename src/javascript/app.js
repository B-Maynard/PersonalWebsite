function fadeOutSplashScreen() {
  $("#splash-screen").fadeOut();
  setTimeout(function() {
    $("#home-screen").fadeIn();
  }, 1000);
}

function transitionCard(newCard, newTab) {
  // when a new item is clicked on left side, we fade out current card and fade in new one
  var currentTab = $(".list-group-item-dark");
  var currentCard = $(".active-card");

  currentTab.removeClass("list-group-item-dark");
  currentTab.addClass("list-group-item");

  currentCard.fadeOut();
  currentCard.removeClass(".active-card");
  
  $(newTab).addClass("list-group-item-dark");
  setTimeout(function() {
    $(newCard).fadeIn();
    $(newCard).addClass(".active-card")
  }, 1000);
}