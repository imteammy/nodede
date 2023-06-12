const { LatensSkills } = require("../models/rov_models");

exports.getAllLatensSkills = async (req, res) => {
  try {
    const skills = await LatensSkills.find({});
    if (skills.length === 0 ){
      return res.json({message : "LatensSkills is empty."})
    }
    return res.send(skills);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getLatensSkillByName = async (req, res) => {
  try {
    const skill = await LatensSkills.findOne({ name: req.body.name });
    return res.json(skill);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateLatensSkill = async (req, res) => {
  try {
    const skill = await LatensSkills.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    return res.json(skill);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteLatensSkill = async (req, res) => {
  try {
    await LatensSkills.findOneAndDelete({ name: req.body.name });
    return res.json("Delete LatensSkill success");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.addLatensSkill = async (req, res) => {
  try {
    const skill = new LatensSkills(req.body);
    await skill.save();
    return res.json({ success: "Add LatensSkill success", message: skill });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
