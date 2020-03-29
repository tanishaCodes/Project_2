var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "118d7e6541mshbc2cbcaf840195ep13f35fjsnd7ca4eaaff11"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});