const connection = require("./connection.js");

// Methods that will execute the necessary MySQL commands in the controllers
const orm = {
  // Select all data
  selectAll: function(table, cb) {
    const queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  // Insert a new row of data
  insertOne: function(table, input, cb) {
    const queryString = `INSERT INTO ${table} (burger_name) VALUES (?);`;
    connection.query(queryString, [input], function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  // Update data for a single entry
  updateOne: function(table, column, value, id, cb) {
    const queryString = `UPDATE ${table} SET ${column} = ${value} WHERE id = ${id}`;
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
}

// Export the orm object for the model
module.exports = orm;