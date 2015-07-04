$(document).ready(function () {
  // on click of button
  $("#generate-quote").click(function () {
    // get a new quote
    var endPoint = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=?";
    $.getJSON(endPoint, function (quoteObject) {
      // replace DOM element "#quote" with the actual quote
      $("#quote").html(quoteObject["quote"]);

      // replace DOM element #author with actual author
      $("#author").html(quoteObject["author"]);
    });
  });
});
