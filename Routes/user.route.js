const { showUser } = require("../Controllers/user.controller");

const router = require("express").Router();

router.get("/records", showUser);

module.exports = router;
