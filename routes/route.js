const express = require("express");
const heroController = require('../controllers/heroes');
const itemsController = require('../controllers/items');
const challengersSkillController = require('../controllers/challengerSkills');
const roonController = require('../controllers/roons');
const latensSkillController = require('../controllers/latensSkills');

auth = async (req, res, next) => {
  
  const { token } = req.body;

  if (!token || token === "" || token === undefined) {
    return res.json({error : "Token is required"});
  }

  if (token === "12345") {
    return next();
  } else {
    return res.json({error : "Invalid token!"});
  }

};
module.exports = (app) => {

  //? Home page
  app.get("/", (req, res, next) => {
    res.send("<center><h1>ROV API .</h1></center>");
  });

  //? Heroes
  app.get('/hero/', heroController.getAllHeroes);
  app.post('/hero/name', heroController.getHeroByName);
  app.post('/hero/add', auth, heroController.addHero);
  app.post('/hero/update', auth, heroController.updateHeroByName);
  app.delete('/hero/delete', auth, heroController.deleteHeroByName);
  app.delete('/hero/delete/id', auth, heroController.deleteHeroById);

  //? Items
  app.get('/items', itemsController.getAllItems);
  app.post('/items/name', itemsController.getItemByName);
  app.post('/items/add', auth, itemsController.addItem);
  app.post('/items/update', auth, itemsController.updateItem);
  app.delete('/items/delete', auth, itemsController.deleteItem);

  //? Challengers Skills
  app.get('/challengersskill', challengersSkillController.getAllSkills);
  app.post('/challengersskill/name', challengersSkillController.getSkillByName);
  app.post('/challengersskill/add', auth, challengersSkillController.addSkill);
  app.post('/challengersskill/update', auth, challengersSkillController.updateSkill);
  app.delete('/challengersskill/delete', auth, challengersSkillController.deleteSkill);

  //? Roons
  app.get('/roon', roonController.getAllRoons);
  app.post('/roon/name', roonController.getRoonByName);
  app.post('/roon/add', auth, roonController.addRoon);
  app.post('/roon/update', auth, roonController.updateRoonByName);
  app.delete('/roon/delete', auth, roonController.deleteRoon);

  //? LatensSkills
  app.get('/latensskill', latensSkillController.getAllLatensSkills);
  app.post('/latensskill/name', auth, latensSkillController.getLatensSkillByName);
  app.post('/latensskill/add', auth, latensSkillController.addLatensSkill);
  app.post('/latensskill/update', auth, latensSkillController.updateLatensSkill);
  app.delete('/latensskill/delete', auth, latensSkillController.deleteLatensSkill);

};
