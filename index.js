const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", __dirname);

app.use(express.json());
app.use(cors());

// creating db connection
const connection = mysql.createConnection({
  host: "web",
  user: "root",
  port: "3306",
  password: "lodesmain@21",
  database: "mlopss",
});

// checking connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});


app.get("/", (req, res) => {
  connection.query("SELECT * FROM user1", (err, results) => {
    if (err) {
      console.error("Error querying the database: " + err.stack);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.render("index", { data: results });
  });
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
