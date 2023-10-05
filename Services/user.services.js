module.exports = {
  showUser: (model, callback) => {
    axios
      .get("http://localhost:5000/")
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
};
