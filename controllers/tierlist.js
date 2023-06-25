const { TierList } = require("../models/rov_models");
exports.getAll = async (req, res) => {
  try {
    const r = await TierList.findOne({});
    if (!r) {
      return res.json({ message: "Tierlist is empty." });
    }
    return res.status(200).send(r);
  } catch (err) {
    return res.json({ error: err.message });
  }
};

exports.addTierlist = (req, res) => {
  try {
    const r = TierList.create({ image: req.body.image });
    return res.status(200).send(r);
  } catch (err) {
    return res.json({ error: err.message });
  }
};
exports.updateTierlist = async (req, res) => {
  try {
    const filter = req.body._id;
    const update = req.body.image;
    const r = await TierList.findOneAndUpdate(filter, update, { new: true });
    if (!r) {
      return res.status(404).json({ message: "Update failed" });
    }

    return res.json({
      message: "Updated successfully.",
      data: r,
    });
  } catch (err) {
    return res.json({ error: err.message });
  }
};
