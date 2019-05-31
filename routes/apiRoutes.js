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

//  app.post("/api/event_update", function(req,res){
//    db.Community.create({
//      first_name: req.body.first_name,
//      last_name: req.body.last_name,
//      qty: req.body.qty,
//      item: req.body.item,
//      email: req.body.email
//       }).then (function(admins){res.json(admins);
//       });

  // })
 

  // Create a new example
  app.post("/api/community", function(req, res) {
    console.log(req.body)
    db.Community.create(req.body).then(function(signInfo) {
      res.redirect('/signup')
    });
  });

  // Delete an example by id
  app.delete("/api/delete/:id", function(req, res) {
    db.Community.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
