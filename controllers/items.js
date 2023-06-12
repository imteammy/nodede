const express = require('express');
const mongoose = require('mongoose');
const { Items } = require("../models/rov_models");


exports.getAllItems = async (req, res) => {

  try {
    const items = await Items.find({});
    res.send(items);
  } catch (error) {
    res.status(400).send(error.message);
  }

};

exports.getItemByName = async (req, res) => {
  try {
    const item = await Items.findOne({ name: req.body.name });
    res.json(item);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


exports.updateItem = async (req, res) => {
  try {

    /**
     ** ใน MongoDB พารามิเตอร์ { new: true }
     ** จะใช้เพื่อระบุว่าจะต้องการให้ฟังก์ชันคืนค่าข้อมูลที่ถูกอัปเดตใหม่ที่สมบูรณ์หลังจากการอัปเดต
     ** โดยค่าพื้นฐานของ { new: false } คือให้คืนค่าข้อมูลก่อนการอัปเดต (เป็นค่าเริ่มต้น)
    **/

    const item = await Items.findOneAndUpdate({ name: req.body.name }, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Items.findOneAndDelete({ name: req.body.name });
    res.json("Delete Item success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addItem = async (req, res ) => {
  try {
    const item = new Items(req.body);
    await item.save();
    res.json({ success : "Add item success" , message : item });
  } catch (error) {
    res.status(400).send(error.message);
  }
};