const express = require("express");
const serviceController = require("../controllers/service-controller");
const router = express.Router();

router.route("/service").get(serviceController.service);

module.exports = router;
