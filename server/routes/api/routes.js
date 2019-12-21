const express = require("express");
const router = express.Router();

const ExampleController = require("../../api/controllers/ExampleController");

router
    .get("/example", ExampleController);

module.exports = router;
