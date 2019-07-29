var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Home page route
router.get("/", function(req, res) {
  burger.all(function(result) {
    res.render("index", { burger: result });
  });
});


// See all data in api route
router.get("/api", function(req, res) {
  burger.all(function(result) {
    res.json(result);
  });
});


// Add a new burger
router.post("/api/burgers", function(req, res) {
  const burgerName = req.body.data.burger_name;

  burger.create(burgerName, function(result) {
    res.json({ id: result.insertId });
  });
});


// Devour burger
router.put("/api/burgers/:id", function(req, res) {
  const id = req.params.id;
  
  burger.update(id, req.body.devoured, function(result) {
  	res.json({ changed: result.changedRows })
  });
});


// Export routes for server.js to use
module.exports = router;