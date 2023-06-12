const express = require("express");
const mongoose = require("mongoose");
//
const { Hero } = require("../models/rov_models");

exports.getAllHeroes = async (req, res) => {
  try {
    const data = await Hero.find();
    return res.send(data);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.getHeroByName = async (req, res) => {
  const name = req.body.name;
  try {
    const data = await Hero.find({ name });
    return res.send(data);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.addHero = async (req, res) => {
  const HeroData = req.body;

  try {
    const result = await Hero.create(HeroData);
    res.json({ message: "Created new hero successfully.", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHeroByName = async (req, res) => {
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

    res.json({ message: "Hero updated successfully.", data: updatedHero });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHeroByName = async (req, res) => {
  const { name } = req.body;
  try {
    const deleteHero = await Hero.findOneAndDelete({ name });
    if (!deleteHero) {
      return res.status(404).json({ message: "Hero not found." });
    }
    
    res.json({ message: "Hero deleted successfully.", data: deleteHero });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
