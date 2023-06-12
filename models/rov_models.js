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
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    effect: {
        type: String,
        required: true,
    },
});

const latensSkillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    effect: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});

const ChallengerSkillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    effect: {
        type: String,
        required: true,
    },
    cooldown: {
        type: String,
        required: true,
    },
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