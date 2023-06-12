const { ChallengerSkills } = require("../models/rov_models");

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await ChallengerSkills.find({});
    res.send(skills);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getSkillByName = async (req, res) => {
  try {
    const skill = await ChallengerSkills.findOne({ name: req.body.name });
    res.json(skill);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await ChallengerSkills.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    res.json(skill);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await ChallengerSkills.findOneAndDelete({ name: req.body.name });
    res.json("Delete Skill success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addSkill = async (req, res) => {
  try {
    const skill = new ChallengerSkills(req.body);
    await skill.save();
    res.json({ success: "Add skill success", message: skill });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
