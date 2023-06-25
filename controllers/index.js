const hero = require('../controllers/heroes');
const items = require('../controllers/items');
const roon = require('../controllers/roons');
const latensSkill = require('../controllers/latensSkills');
const challengersSkill = require('../controllers/challengerSkills');
const tierlist = require('./tierlist')
const comboHero = require('../controllers/comboHero')
module.exports = {
    hero,
    items,
    roon,
    latensSkill,
    comboHero,
    challengersSkill,
    tierlist
};