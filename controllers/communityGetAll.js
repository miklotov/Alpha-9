var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

module.exports = function (app) {
    //Get all examples
    // debugger
    //  console.log("getting db + " + db)
    
    app.get("/api/community", function (req, res) {
        //  debugger
        // console.log(req)
        //  debugger
        db.Community.findAll({ role: 'admin' }).then(admins => {
            console.log(`Found ${admins.length} matching records.`);
            res.json(admins);
        });
    });

};