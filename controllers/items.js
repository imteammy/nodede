const express = require("express");

const route = express.Router();

exports.CheckItems = (model, id) => {
  const check = model.find({ _id: id });

  if (!id) {
    return res.status(400).json({ message: "Please provide item id" });
  }

  if (check.length === 0) {
    return res.status(404).json({ message: "Item not found" });
  }
}

exports.greet = (req, res) =>{
    console.log("hello");
    return res.status(200).json({ message: "Success" });
}

