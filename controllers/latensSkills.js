const { LatensSkills } = require("../models/rov_models");

exports.getAllLatensSkills = async (req, res) => {
  try {
    const skills = await LatensSkills.find({});
    res.send(skills);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getLatensSkillByName = async (req, res) => {
  try {
    const skill = await LatensSkills.findOne({ name: req.body.name });
    res.json(skill);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateLatensSkill = async (req, res) => {
  try {
    const skill = await LatensSkills.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    res.json(skill);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteLatensSkill = async (req, res) => {
  try {
    await LatensSkills.findOneAndDelete({ name: req.body.name });
    res.json("Delete LatensSkill success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addLatensSkill = async (req, res) => {
  try {
    const skill = new LatensSkills(req.body);
    await skill.save();
    res.json({ success: "Add LatensSkill success", message: skill });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
