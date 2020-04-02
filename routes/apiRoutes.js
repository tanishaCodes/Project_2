var db = require("../models/example.js"); //Change this to the file with the db info

module.exports = function(app) {
  // Get all examples
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) { // Change Example to the sequelize.define name
      res.json(dbExamples); // Change to the dbexample to sequelize.define name
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
