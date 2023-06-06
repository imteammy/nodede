const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const { Hero, Items, Roons } = require("../models/rov_model");
const { CheckItems, greet } = require('../controllers/items');

const route = express.Router();

function tokenAuth(req, res, next) {
  // const secret_token = 'X1tstaNYRGRs^dlKEDYc754G9m@beOPa';
  // const { token } = req.body;
  // console.log(token);
  // if (!token || token !== secret_token) {
  //     return res.status(403).json({ message: "Access denied for invalid token" });
  // }
  next();
}
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Home");
  });

  //? Heroes
  app.post("/hero", tokenAuth, async (req, res) => {
    if (req) {
      console.log("have post to hero")
    }
    try {
      const heroData = await Hero.find({});
      res.json(heroData);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.get("/hero", tokenAuth, async (req, res) => {
    if (req) {
      console.log("have get to hero")
    }
    try {
      const heroData = await Hero.find({});
      res.json(heroData);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.post("/hero/name", tokenAuth, async (req, res) => {
    try {
      const { name } = req.body;
      const heroData = await Hero.find({ name });

      if (heroData) {
        return res.status(200).json(heroData);
      }
    } catch (error) {
      return res
        .status(404)
        .json({ errors: "Hero not found. Maybe invalit hero name" });
    }

    res.json({ errors: "Access denied." });
  });
  app.get("/hero/:name", async (req, res) => {
    try {
      const name = req.params.name; // Extract the hero name from the URL parameter
      const heroData = await Hero.findOne({ name: name }); // Use findOne instead of findById, as you are querying based on name
      console.log(heroData.name);
      if (!heroData) {
        return res.status(404).json({ message: "Hero not found" });
      } else {
        return res.status(200).json(heroData);
      }
    } catch (error) {
      return res.status(500).json({ errors: "Internal server error" });
    }
  });

  // Update hero data
  app.post("/hero/update", tokenAuth, async (req, res) => {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Please provide hero id" });
      }

      const update = {
        name: req.body.heroName,
        story: req.body.heroStory,
        image: req.body.heroImage,
        role: {
          main: req.boddy.main,
          sub: req.boddy.sub,
        },
        skills: {
          passiveSkill: {
            name: req.body.passiveSkillname,
            image: req.body.passiveSkillimage,
            effect: req.body.passiveSkilleffect,
            cooldown: req.body.passiveSkillcooldown,
          },
          firstSkill: {
            name: req.body.FirstSkillname,
            image: req.body.FirstSkillimage,
            effect: req.body.FirstSkilleffect,
            cooldown: req.body.FirstSkillcooldown,
          },
          secondSkill: {
            name: req.body.SecondSkillname,
            image: req.body.SecondSkillimage,
            effect: req.body.SecondSkilleffect,
            cooldown: req.body.SecondSkillcooldown,
          },
          ultimateSkill: {
            name: req.body.UltimateSkillname,
            image: req.body.UltimateSkillimage,
            effect: req.body.UltimateSkilleffect,
            cooldown: req.body.UltimateSkillcooldown,
          },
        },
      };

      const heroData = await Hero.findByIdAndUpdate(id, update, { new: true });

      return res.status(200).send({ message: "Updated success" }, heroData);
    } catch (err) {
      res.status(500).send(err.message);
    }
    res.end();
  });

  //? Items
  app.get("/items", async (req, res) => {
    try {
      const itemData = await Items.find({});
      if (itemData.length === 0) {
        return res.json({ message: "Data is empty." });
      }
      return res.status(200).send(itemData);
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

  app.get("/items/id", async (req, res) => {
    const { id } = req.boddy;
    try {
      const itemData = await Items.findOne({ _id: id });
      if (!itemData) {
        return res.status(404).json({ message: "Item not found" });
      } else {
        return res.status(200).json(itemData);
      }
    } catch (error) {

    }
  });

  // TODO update items
  app.post("/items/update", greet, async (req, res) => {
    const { id, name } = req.body;

    // checkItems(Items, id);
    //();
    const update = {
      name: req.body.itemName,
      image: req.body.itemImage,
      effect: req.body.itemEffect,
      itemPassive: req.body.itemPassive,
      cooldown: req.body.cooldown,
      cost: req.body.cost
    };
    // try {
    //     const updateItem = await Items.findByIdAndUpdate(
    //         { _id: id },
    //         update,
    //         { new: true }
    //     );
    //     if (!update
    //     );
    // } catch (error) {

    // }
  });
};