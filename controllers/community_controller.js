var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/signup");
});

// get route, edited to match sequelize
router.get("/signup", function(req, res) {
  // replace old function with sequelize function
  db.Community.findAll({
    include: [db.Community],
    // Here we specify we want to return our picnic signup
    order: [
      ["last_name", "ASC"]
    ]
  })
  // use promise method to pass the ...
    .then(function(dbCommunity) {
    // into the main index, updating the page
      var hbsObject = {
        picnic: dbCommunity
      };
      return res.render("index", hbsObject);
    });
});