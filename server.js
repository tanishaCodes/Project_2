require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
}));
app.set("view engine", "handlebars");

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Dashboard' 
  });
});

app.get('/stocks', (req, res) => {
  res.render('stocks', { 
    title: 'Stocks' 
  });
});

app.get('/mutualFunds', (req, res) => {
  res.render('mutualFunds', { 
    title: 'Mutual Funds' 
  });
});

app.get('/crypto', (req, res) => {
  res.render('cryptoCurrency', { 
    title: 'Crypto Currency' 
  });
});

app.get('/exchange', (req, res) => {
  res.render('currencyExchange', { 
    title: 'Currency Exchange' 
  });
});

app.get('/news', (req, res) => {
  res.render('news', { 
    title: 'News'
  });
});

app.get('/profile', (req, res) => {
  res.render('profile', { 
    title: 'Profile' 
  });
});

app.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Login' 
  });
});

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, () => {
    console.log(
      " 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
