const express = require('express');
const { Hero, Items, Roons } = require("../models/rov_model");
const { CheckItems, greet } = require('../controllers/items');

const route = express.Router();


module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Home");
  });

  //? Heroes
  app.get("/hero", async (req, res) => {

    const heroes = await Hero.find({});
    res.json(heroes);

  });

};