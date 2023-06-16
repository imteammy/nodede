const express = require("express");

const { hero, items, challengersSkill, roon, latensSkill } = require('../controllers/index');

const auth = require('../middleware/middleware');

module.exports = (app) => {

  //TODO Home page
  app.get("/", (req, res, next) => {
    res.send("<center><h1>ROV API .</h1></center>");
  });

  //TODO Heroes
  app.get('/hero/', hero.getAllHeroes);
  app.post('/hero/name',auth, hero.getHeroByName);
  app.post('/hero/add', auth, hero.addHero);
  app.post('/hero/update', auth, hero.updateHeroByName);
  app.delete('/hero/delete', auth, hero.deleteHeroByName);
  app.delete('/hero/delete/id', auth, hero.deleteHeroById);

  //TODO Items
  app.get('/items', items.getAllItems);
  app.post('/items/name', auth, items.getItemByName);
  app.post('/items/add', auth, items.addItem);
  app.post('/items/update', auth, items.updateItem);
  app.delete('/items/delete', auth, items.deleteItem);

  //TODO Challengers Skills
  app.get('/challengersskill', challengersSkill.getAllSkills);
  app.post('/challengersskill/name', challengersSkill.getSkillByName);
  app.post('/challengersskill/add', auth, challengersSkill.addSkill);
  app.post('/challengersskill/update', auth, challengersSkill.updateSkill);
  app.delete('/challengersskill/delete', auth, challengersSkill.deleteSkill);

  //TODO Roons
  app.get('/roon', roon.getAllRoons);
  app.post('/roon/name', roon.getRoonByName);
  app.post('/roon/add', auth, roon.addRoon);
  app.post('/roon/update', auth, roon.updateRoonByName);
  app.delete('/roon/delete', auth, roon.deleteRoon);

  //TODO LatensSkills
  app.get('/latensskill', latensSkill.getAllLatensSkills);
  app.post('/latensskill/name', auth, latensSkill.getLatensSkillByName);
  app.post('/latensskill/add', auth, latensSkill.addLatensSkill);
  app.post('/latensskill/update', auth, latensSkill.updateLatensSkill);
  app.delete('/latensskill/delete', auth, latensSkill.deleteLatensSkill);

};



