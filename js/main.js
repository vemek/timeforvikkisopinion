$(function() {
  var quotes = ["quote before load"];

  function setRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];

    var quoteContainer = $(".quote-container");
    var quoteDiv = $("#quote");

    quoteContainer.hide();
    quoteDiv.text(quote);
    quoteContainer.fadeIn(2500);
  }

  $(".next-quote").click(function() {
    setRandomQuote();
  });

  $.getJSON( "quotes.json", function( data ) {
    quotes = data;
    setRandomQuote();
  });
});
