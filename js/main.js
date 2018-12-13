$(function() {
  var quotes = ["quote before load"];
  var imgCount = 11;

  function setRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];

    var quoteContainer = $(".quote-container");
    var quoteDiv = $("#quote");

    quoteContainer.hide();
    quoteDiv.text(quote);
    quoteContainer.fadeIn(2500);
  }

  function setRandomBackground() {
    var randomIndex = Math.floor(Math.random() * imgCount);
    var img = 'url("/img/bg-' + randomIndex + '.jpg")';

    $(".background-image").css("background-image", img);

  }

  $("header").click(function() {
    setRandomQuote();
    setRandomBackground();
  });

  $.getJSON( "quotes.json", function( data ) {
    quotes = data;
    setRandomQuote();
    setRandomBackground();
  });
});
