const express = require("express");
const app = express();

lights = app.get("/", function (req, res) {
  res.send("Get all lights");
});
module.exports = lights;
