const { Roons } = require("../models/rov_models");

exports.getAllRoons = async (req, res) => {
  try {
    const roons = await Roons.find({});
    res.send(roons);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getRoonByName = async (req, res) => {
  try {
    const roon = await Roons.findOne({ name: req.body.name });
    res.json(roon);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateRoonByName = async (req, res) => {
  try {
    const roon = await Roons.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    res.json(roon);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteRoon = async (req, res) => {
  try {
    await Roons.findOneAndDelete({ name: req.body.name });
    res.json("Delete Roon success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addRoon = async (req, res) => {
  try {
    const roon = new Roons(req.body);
    await roon.save();
    res.json({ success: "Add roon success", message: roon });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
