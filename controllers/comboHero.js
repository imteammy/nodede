
const { ComboHero } = require('../models/rov_models')

exports.getAllComboHero = async (req, res, next) => {
    try {
        const r = await ComboHero.find()

        if (r.length === 0) {
            return res.json({ message: 'Heroes is empty.' })
        }
        return res.send(r)
    } catch (error) {
        return res.send(error.message)
    }
}

exports.getComboHeroByName = async (req, res, next) => {
    const name = req.body.name
    try {
        const ComboHero = await ComboHero.find({ name });
        if(!hero) {
            return ({message : "Hero not foound!"});
        }
        return res.send(hero);
    } catch (error) {
        return res.send(error.message);
    }
}

exports.addHero = async (req, res, next) => {
    const ComboHeroData = req.body
    delete ComboHeroData.token;
    try {
        const result = await ComboHero.create(...HeroData)
        return res.json({ message: 'Created new ComboHero successfully.', data: result })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.updateHeroByName = async (req, res, next) => {
    try {
        const data = req.body;
        delete data.token;

        const filter = { _id: data.id };
        const update = Object.assign({}, data);
        const updateResult = await ComboHero.findOneAndUpdate(filter, update, {
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
        const deleteHero = await ComboHero.findOneAndDelete({ name })
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
        const deleteHero = await ComboHero.findOneAndDelete({ _id: id })
        if (!deleteHero) {
            return res.status(404).json({ message: 'Hero not found.' })
        }

        return res.json({ message: 'Hero deleted successfully.', data: deleteHero })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
