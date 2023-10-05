const pool = require("../config/databse");
const bcrypt = require("bcrypt");

module.exports = {
  postUser: (model, callback) => {
    console.log("API CALLED");

    axios
      .post("http://localhost:5000/", {
        email: model.email,
        password: model.password,
      })
      .then((response) => {
        // Handle the API response here
        console.log("API Response:", response.data);
        return callback(null, response.data);
      })
      .catch((apiError) => {
        // Handle API request error here
        console.error("API Request Error:", apiError);
        return callback(apiError);
      });
  },

  authenticateUser: (model, callback) => {
    pool.query(
      "SELECT * FROM `user` WHERE `email` = ?",
      [model.email],
      (error, results) => {
        if (error) {
          callback(error);
          //   return ;
        }

        if (results.length === 0) {
          callback(error);
        }

        const user = results[0];

        bcrypt.compare(model.password, user.password, (err, result) => {
          if (err) {
            callback(err);
            console.error("Error comparing passwords:", err);
          } else if (result) {
            callback(null, results);
            console.log("Password is correct. Login successful.");
          } else {
            callback(err);
            console.log("Password is incorrect. Login failed.");
          }
        });

        // Compare the stored password hash with the provided password
        // if (user.password !== password) {
        //   return res.status(401).json({ message: "Invalid password" });
        // }

        // Authentication successful, you can generate a JWT token or set a session here
        // For simplicity, we'll just send a success response
        // return res.status(200).json({ message: "Login successful" });
      }
    );
  },
};
