const express = require("express");

const x = require("../controllers/route1controller");

const route1 = express.Router();

route1.route("/").post(x.postHandler);

module.exports = route1;
