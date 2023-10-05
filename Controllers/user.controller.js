
const userService = require("../Services/user.services");

module.exports = {
  showUser: (req, res) => {
    userService.showUser(req.body, (error, result) => {
      if (result) return res.status(200).send(result);
      else return res.status(500).send(error);
    });
  },
};
