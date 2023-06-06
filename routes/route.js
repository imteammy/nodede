const express = require('express');
const {
    Hero,
    Items,
    Roons
} = require("../models/rov_model");
const {
    CheckItems,
    greet
} = require('../controllers/items');
const db = require('../controllers/database');
const route = express.Router();


module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("Home");
    });

    //? Heroes
    app.get("/hero", async (req, res) => {

        async function run() {

            await db;

            const data = await Hero.find();
            return res.send(data);
        }

        run();
    });

    //TODO: Update hero
    app.post("/hero/upload", async (req, res) => {

        const {
            token,
            heroName,
            heroImage,
            heroStory,
            mainRole,
            subRole,
            passiveSkillName,
            passiveSkillImage,
            passiveSkilleffect,
            passiveSkillCooldown,
            firstSkillName,
            firstSkillImage,
            firstSkilleffect,
            firstSkillCooldown,
            secondSkillName,
            secondSkillImage,
            secondSkilleffect,
            secondSkillCooldown,
            ultimateSkillName,
            ultimateSkillImage,
            ultimateSkilleffect,
            ultimateSkillCooldown
        } = req.body;

        if (token != "123") {
            return res.status(400).send("No token provided");
        }

        const upload = {
            name: heroName,
            image: heroImage,
            story: heroStory,
            role: {
                main: mainRole,
                sub: subRole
            },
            skills: {
                passiveSkill: {
                    name: passiveSkillName,
                    image: passiveSkillImage,
                    effect: passiveSkilleffect,
                    cooldown: passiveSkillCooldown
                },
                firstSkill: {
                    name: firstSkillName,
                    image: firstSkillImage,
                    effect: firstSkilleffect,
                    cooldown: firstSkillCooldown
                },
                secondSkill: {
                    name: secondSkillName,
                    image: secondSkillImage,
                    effect: secondSkilleffect,
                    cooldown: secondSkillCooldown
                },
                ultimateSkill: {
                    name: ultimateSkillName,
                    image: ultimateSkillImage,
                    effect: ultimateSkilleffect,
                    cooldown: ultimateSkillCooldown
                }
            }

        }

        async function update() {

            await db;
            const filter = req.body;
            const data = await Hero.create(upload).then(success => {
                return res.send(success);
            }).catch(error => {
                return res.send(error);
            });


        }

        update();

    });

};