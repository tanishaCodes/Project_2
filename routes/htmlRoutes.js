var db = require("../models");

module.exports = function(app) {
  // Load pages
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/stocks", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("stocks.handlebars", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/mutualFunds", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("mutualFunds.handlebars", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/crypto", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("cryptoCurrency.handlebars", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/exchange", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("currencyExchange.handlebars", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/news", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("news.handlebars", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/profile", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("profile.handlebars", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/login", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("login.html", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
// eslint-disable-next-line prettier/prettier
};