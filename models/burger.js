// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

// Burger model
const burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  },

  create: function(burgerName, cb) {
    orm.insertOne("burgers", "burger_name", burgerName, function(data) {
      cb(data);
    });
  },

  update: function(id, value, cb) {
    orm.updateOne("burgers", "devoured", value, "id", id, function(data) {
      cb(data);
    });
  },
}

// Export the database functions for the controller
module.exports = burger;