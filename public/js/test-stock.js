// THIS WAS AN ALTERNATIVE ATTEMPT AT PULLING STOCK DETAILS FROM THE FINANCIALS PART OF API

var stock = "";

var APIKey = "118d7e6541mshbc2cbcaf840195ep13f35fjsnd7ca4eaaff11";
var queryURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=AMRN" + APIKey;

$(document).on('click'), 'stocks-search-button', function() {

    $('#stock-financial').empty();

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var summaryDetailTd = $("<td>").text(response.summaryDetail);
    var symbolTd = $("<td>").text(response.symbol);
    var priceTd = $("<td>").text(response.price);
    var quoteTypeTd = $("<td>").text(response.quoteType);
    var earningsTd = $("<td>").text(response.earnings);
      
    // Append the newly created table data to the table row
    tRow.append(summaryDetailTd, symbolTd, priceTd, quoteTypeTd, earningsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  });
