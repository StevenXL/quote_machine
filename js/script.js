$(document).ready(function () {
  // on click of button
  $("#generate-quote").click(function () {
    // get a new quote
    var endPoint = "https://jsonp.afeld.me/?url=http%3A%2F%2Fquotes.stormconsultancy.co.uk%2Frandom.json&callback=?";
    $.getJSON(endPoint, function (quoteObject) {
      // replace DOM element "#quote" with the actual quote
      $("#quote").html(quoteObject["quote"]);

      // replace DOM element #author with actual author
      $("#author").html(quoteObject["author"]);
    });
  });
});
