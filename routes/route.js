const express = require("express");
const heroController = require('../controllers/heroes');
const itemsController = require('../controllers/items');
const challengersSkillController = require('../controllers/challengerSkills');
const roonController = require('../controllers/roons');
const latensSkillController = require('../controllers/latensSkills');
module.exports = (app) => {

  //? Home page
  app.get("/", (req, res, next) => {
    res.send("<center><h1>ROV API</h1></center>");
  });

  //? Heroes
  app.get('/hero', heroController.getAllHeroes);
  app.get('/hero/name', heroController.getHeroByName);
  app.post('/hero/add', heroController.addHero);
  app.post('/hero/update', heroController.updateHeroByName);
  app.delete('/hero/delete', heroController.deleteHeroByName);
  app.delete('/hero/delete/id', heroController.deleteHeroById);

  //? Items
  app.get('/items', itemsController.getAllItems);
  app.get('/items/name', itemsController.getItemByName);
  app.post('/items/add', itemsController.addItem);
  app.post('/items/update', itemsController.updateItem);
  app.delete('/items/delete', itemsController.deleteItem);

  //? Challengers Skills
  app.get('/challengersskill', challengersSkillController.getAllSkills);
  app.get('/challengersskill/name', challengersSkillController.getSkillByName);
  app.post('/challengersskill/add', challengersSkillController.addSkill);
  app.post('/challengersskill/update', challengersSkillController.updateSkill);
  app.delete('/challengersskill/delete', challengersSkillController.deleteSkill);

  //? Roons
  app.get('/roon', roonController.getAllRoons);
  app.get('/roon/name', roonController.getRoonByName);
  app.post('/roon/add', roonController.addRoon);
  app.post('/roon/update', roonController.updateRoonByName);
  app.delete('/roon/delete', roonController.deleteRoon);

  //? LatensSkills
  app.get('/latensskill', latensSkillController.getAllLatensSkills);
  app.get('/latensskill/name', latensSkillController.getLatensSkillByName);
  app.post('/latensskill/add', latensSkillController.addLatensSkill);
  app.post('/latensskill/update', latensSkillController.updateLatensSkill);
  app.delete('/latensskill/delete', latensSkillController.deleteLatensSkill);

};
