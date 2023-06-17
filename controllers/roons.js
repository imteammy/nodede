const { Roons } = require("../models/rov_models");

exports.getAllRoons = async (req, res) => {
    try {
        const roons = await Roons.find({});
        if (roons.length === 0) {
            return res.json({ message: "All roons is empty." });
        }
        return res.send(roons);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.getRoonByName = async (req, res) => {
    try {
        const roon = await Roons.findOne({ name: req.body.name });
        return res.json(roon);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.updateRoonByName = async (req, res) => {
    try {
        const data = req.body;
        delete data.token;

        const filter = { _id: data.id };
        const update = { $set: data };
        const updateResult = await Roons.findOneAndUpdate(filter, update, {
            new: true,
        });

        if (!updateResult) {
            return res.status(404).json({ message: 'Roon not found.' });
        };

        return res.json({
            message: 'Roon updated successfully.',
            data: updateResult
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.deleteRoon = async (req, res) => {
    try {
        await Roons.findOneAndDelete({ name: req.body.name });
        return res.json("Delete Roon success");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.addRoon = async (req, res) => {
    try {
        const roon = new Roons(req.body);
        await roon.save();
        return res.json({ success: "Add roon success", message: roon });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
