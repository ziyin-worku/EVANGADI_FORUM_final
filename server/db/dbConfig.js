const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "localhost",
  user: "evangadi-forum-admin",
  password: "123456789",
  database: "evangadi-final-project",
});

module.exports = db.promise();
