const express = require("express");
const mongoose = require("mongoose");
//
const { Hero } = require("../models/rov_models");

exports.getAllHeroes = async (req, res, next) => {
  try {
    const hero = await Hero.find();

    if (hero.length === 0 ){
      return res.json({message : "Heroes is empty."})
    }

    return res.send(hero);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.getHeroByName = async (req, res, next) => {
  const name = req.body.name;
  try {
    const hero = await Hero.find({ name });
    return res.send(hero);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.addHero = async (req, res, next) => {
  const HeroData = req.body;

  try {
    const result = await Hero.create(HeroData);
    return res.json({ message: "Created new hero successfully.", data: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.updateHeroByName = async (req, res, next) => {
  const { name, updatedData } = req.body;

  try {
    const updatedHero = await Hero.findOneAndUpdate(
      { name: name },
      updatedData,
      { new: true }
    );

    if (!updatedHero) {
      return res.status(404).json({ message: "Hero not found." });
    }

    return res.json({ message: "Hero updated successfully.", data: updatedHero });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteHeroByName = async (req, res, next) => {
  const { name } = req.body;
  try {
    const deleteHero = await Hero.findOneAndDelete({ name });
    if (!deleteHero) {
      return res.status(404).json({ message: "Hero not found." });
    }
    
    return res.json({ message: "Hero deleted successfully.", data: deleteHero });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteHeroById = async (req, res, next) => {
  const { id } = req.body;
  try {
    const deleteHero = await Hero.findOneAndDelete({ _id : id });
    if (!deleteHero) {
      return res.status(404).json({ message: "Hero not found." });
    }
    
    return res.json({ message: "Hero deleted successfully.", data: deleteHero });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
