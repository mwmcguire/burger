// Set up MySQL connection
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  // If on Heroku and JawsDB is present, use this
  connetion = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
  });
};

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  };
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;