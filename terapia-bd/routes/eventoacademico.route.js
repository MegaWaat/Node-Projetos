const express = require("express");
const eventoacademicoController = require("../controllers/eventoacademico.controller.js");
const routes = express.Router();
routes.post("/eventoacademico", eventoacademicoController.create);
module.exports = routes;