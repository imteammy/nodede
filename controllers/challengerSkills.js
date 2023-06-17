const { ChallengerSkills } = require('../models/rov_models')

exports.getAllSkills = async (req, res, next) => {
  try {
    const skills = await ChallengerSkills.find({})
    if (skills.length === 0) {
      return res
        .status(404)
        .send({ data: { message: 'ChallengerSkills is empty' } })
    }
    return res.json(skills)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.getSkillByName = async (req, res) => {
  try {
    const skill = await ChallengerSkills.findOne({ name: req.body.name })
    return res.json(skill)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.updateSkill = async (req, res) => {
  try {
    const data = req.body
    delete data.token

    const filter = { _id: data.id }
    const update = { $set: data }
    const updateResult = await ChallengerSkills.findOneAndUpdate({ new: true })
    if (!updateResult) {
      return res
        .status(404)
        .send({ data: { message: 'ChallengerSkills not found' } })
    }
    return res.json(updateResult)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.deleteSkill = async (req, res) => {
  try {
    await ChallengerSkills.findOneAndDelete({ name: req.body.name })
    return res.json('Delete Skill success')
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.addSkill = async (req, res) => {
  try {
    const skill = new ChallengerSkills(req.body)
    await skill.save()
    return res.json({ success: 'Add skill success', message: skill })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
