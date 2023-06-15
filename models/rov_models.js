const mongoose = require("mongoose");

/* Start Schema */
    const heroSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    story: { type: String, default: "null" },
    image: { type: String, default: "null" },
    role: {
        main: { type: String, default: "null" },
        sub: { type: String, default: "null" },
    },
    passiveSkill: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
        cooldown: { type: String, default: "null" },
    },
    firstSkill: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
        cooldown: { type: String, default: "null" },
    },
    secondSkill: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
        cooldown: { type: String, default: "null" },
    },
    ultimateSkill: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
        cooldown: { type: String, default: "null" },
    },
    });

    const roonSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    color: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" }
    });

    const latensSkillsSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    color: { type: String, default: "null" }
    });

    const ChallengerSkillsSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    cooldown: { type: String, default: "null" }
    });

    const itemSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    itemPassive: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
    cost: { type: String, default: "null" }
    });
// End Schema */

/** Start Models */
const Roons = mongoose.model("Roons", roonSchema);
const LatensSkills = mongoose.model("LatensSkills", latensSkillsSchema);
const ChallengerSkills = mongoose.model(
  "ChallengerSkills",
  ChallengerSkillsSchema
);
const Items = mongoose.model("Items", itemSchema);
const Hero = mongoose.model("Hero", heroSchema);
//** End Models */


module.exports = {
  Hero,
  Roons,
  LatensSkills,
  ChallengerSkills,
  Items,
};
