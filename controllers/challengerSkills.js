const { ChallengerSkills } = require("../models/rov_models");

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await ChallengerSkills.find({});
    if (skills === 0){
      return res.status(404).send("ChallengerSkills is empty");
    }
    return res.send(skills);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getSkillByName = async (req, res) => {
  try {
    const skill = await ChallengerSkills.findOne({ name: req.body.name });
    return res.json(skill);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await ChallengerSkills.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    return res.json(skill);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await ChallengerSkills.findOneAndDelete({ name: req.body.name });
    return res.json("Delete Skill success");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.addSkill = async (req, res) => {
  try {
    const skill = new ChallengerSkills(req.body);
    await skill.save();
    return res.json({ success: "Add skill success", message: skill });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
