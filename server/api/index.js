const express = require("express");
const serveREADME = require("../services/serveREADME.js");
const projects = require("./projects.js");
const router = express.Router();
router.get("/", serveREADME);
router.use("/projects", projects);
module.exports = router;
