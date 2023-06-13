const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    name: String,
    story: String,
    image: String,
    role: {
        main: String,
        sub: String,
    },
    skills: {
        passiveSkill: {
            name: String,
            image: String,
            effect: String,
            cooldown: String,
        },
        firstSkill: {
            name: String,
            image: String,
            effect: String,
            cooldown: String,
        },
        secondSkill: {
            name: String,
            image: String,
            effect: String,
            cooldown: String,
        },
        ultimateSkill: {
            name: String,
            image: String,
            effect: String,
            cooldown: String,
        },
    },
});

const roonSchema = new mongoose.Schema({
    name: String,
    color: String,
    image: String,
    effect: String,
});

const latensSkillsSchema = new mongoose.Schema({
    name: String,
    image: String,
    effect: String,
    color: String,
});

const ChallengerSkillsSchema = new mongoose.Schema({
    name: String,
    image: String,
    effect: String,
    cooldown: String,
});

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    effect: String,
    itemPassive: String,
    cooldown: String,
    cost: String
});

const Roons = mongoose.model("Roons", roonSchema);
const LatensSkills = mongoose.model("LatensSkills", latensSkillsSchema);
const ChallengerSkills = mongoose.model("ChallengerSkills", ChallengerSkillsSchema);
const Items = mongoose.model("Items", itemSchema);
const Hero = mongoose.model("Hero", heroSchema);

module.exports = {
    Hero,
    Roons,
    LatensSkills,
    ChallengerSkills,
    Items,
};
