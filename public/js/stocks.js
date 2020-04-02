console.log("test");

$("#searchForm").on("submit", function(e) {
	e.preventDefault();

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=AMRN",
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		  "x-rapidapi-key": "118d7e6541mshbc2cbcaf840195ep13f35fjsnd7ca4eaaff11"
	  }

	  $.ajax(settings).done(function (response) {
		  console.log(response);
		  $('#stock-details').append(searchDiv);
  })}})