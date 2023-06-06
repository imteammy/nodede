const express = require('express');
const { Hero, Items, Roons } = require("../models/rov_model");
const { CheckItems, greet } = require('../controllers/items');
const db = require('../controllers/database');
const route = express.Router();


module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Home");
  });

  //? Heroes
  app.get("/hero", async (req, res) => {

    async function run() {

      await db;
    
      const data =   await Hero.find();
      return res.send(data);
    }
    
    run();
  });

};