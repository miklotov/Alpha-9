var express = require("express");
var axios = require("axios");
var router = express.Router();
// grabbing our models
var db = require("../models");


module.exports = function (app) {
  //  Load index page
  app.get("/", function (req, res) {
    db.Community.findAll({}).then(function (Community) {
      res.render("index", {
        msg: "Welcome!",
        examples: Community
      });
    });
  });

  app.get("/signup", function (req, res) {
    db.Community.findAll({role: 'admin'}).then(admins => {
      console.log(`Found ${admins.length} matching records.`);
      console.log(admins)
      res.render("signup",{data:admins});
   });

  app.post("/post",function (req, res) {
       console.log("submit button clicked");
  });
    // axios.get("api/community").then(
    //   function (data) {
    //     console.log(data);
    //     res.render("signup");
    //   }
    // )
    // .catch(function(err){
    //   console.log(err);
    // });
  

  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};