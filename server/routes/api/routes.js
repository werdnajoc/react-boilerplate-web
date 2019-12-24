const express = require("express");
const router = express.Router();
const ExampleController = require("server/api/controllers/ExampleController.js");

router
    .get("/example", ExampleController);

module.exports = router;
