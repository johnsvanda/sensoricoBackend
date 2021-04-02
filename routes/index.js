const express = require("express");
const router = express.Router();
const lights = require("./lights");
const Light = require("../models/light");

router.use("/lights", lights);

router.get("/new", (req, res) => {
  const light = new Light({
    id: "0",
    city: "City",
    devEUI: "54561564564654654",
  });

  light
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
