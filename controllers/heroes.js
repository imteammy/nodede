
const { Hero } = require('../models/rov_models')

exports.getAllHeroes = async (req, res, next) => {
    try {
        const hero = await Hero.find()

        if (hero.length === 0) {
            return res.json({ message: 'Heroes is empty.' })
        }

        return res.send(hero)
    } catch (error) {
        return res.send(error.message)
    }
}

exports.getHeroByName = async (req, res, next) => {
    const name = req.body.name
    try {
        const hero = await Hero.find({ name });
        if(!hero) {
            return ({message : "Hero not foound!"});
        }
        return res.send(hero);
    } catch (error) {
        return res.send(error.message);
    }
}

exports.addHero = async (req, res, next) => {
    const HeroData = req.body
    delete HeroData.token;
    try {
        const result = await Hero.create(...HeroData)
        return res.json({ message: 'Created new hero successfully.', data: result })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.updateHeroByName = async (req, res, next) => {
    try {
        const data = req.body;
        delete data.token;

        const filter = { id: data.id };
        const update = Object.assign({}, data);
        const updateResult = await Hero.findOneAndUpdate(filter, update, {
        new: true
        });

        if (!updateResult) {
            return res.status(404).json({ message: 'Hero not found.' });
        };

        return res.json({
            message: 'Hero updated successfully.',
            data: updateResult
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteHeroByName = async (req, res, next) => {
    const { name } = req.body
    try {
        const deleteHero = await Hero.findOneAndDelete({ name })
        if (!deleteHero) {
            return res.status(404).json({ message: 'Hero not found.' })
        }

        return res.json({ message: 'Hero deleted successfully.', data: deleteHero })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteHeroById = async (req, res, next) => {
    const { id } = req.body
    try {
        const deleteHero = await Hero.findOneAndDelete({ _id: id })
        if (!deleteHero) {
            return res.status(404).json({ message: 'Hero not found.' })
        }

        return res.json({ message: 'Hero deleted successfully.', data: deleteHero })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
