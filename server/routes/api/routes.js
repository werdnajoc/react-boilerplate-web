const express = require("express");
const router = express.Router();
const {globalRequire} = require("../../helpers");
const ExampleController = globalRequire("api/controllers/ExampleController.js");

router
    .get("/example", ExampleController);

module.exports = router;
