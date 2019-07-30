var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Home page route
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
  };
  console.log(hbsObject);
  res.render("index", hbsObject);
  });
});


// Add a new burger
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured" 
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});


// Devour burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  
  burger.update({
   "devoured": req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use
module.exports = router;