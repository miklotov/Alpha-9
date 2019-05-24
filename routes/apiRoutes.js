var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

module.exports = function(app) {
  //Get all examples
// debugger
//  console.log("getting db + " + db)
 app.get("/api/community", function(req, res) {
 //  debugger
  // console.log(req)
 //  debugger
    db.Community.findAll({role: 'admin'}).then(admins => {
      console.log(`Found ${admins.length} matching records.`);
      res.json(admins);
   });
 });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Community.create(req.body).then(function(admins) {
      res.json(admins);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
