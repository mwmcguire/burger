// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  create: function(burger_name, cb){
    orm.insertOne("burger_name", burger_name, function(res){
      cb(res);
    });
  },

  update: function(id, value, cb){
     orm.updateOne("burgers","devoured",value,"id",id,function(res){
      cb(res);
    });
  },
  
  delete: function(id, cb){
    orm.delete("burgers","id",id,function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;