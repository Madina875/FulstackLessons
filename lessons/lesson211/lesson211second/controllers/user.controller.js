const userModel = require("../models/user.models");
const userValide = require("../validations/user.validation");

async function findAll(req, res) {
  try {
    let users = await userModel.find({});
    res.status(200).send({ data: users });
  } catch (error) {
    console.log(error);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let user = await userModel.findById(id);
    res.status(200).send({ data: user });
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let { error } = userValide(data);

    if (error) {
      return res.status(500).send({ message: error.message });
    }

    let user = await userModel.create(data);
    res.status(201).send({ data: user });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  let data = req.body;
  let { id } = req.params;
  try {
    let updateUser = await userModel.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateUser });
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  let { id } = req.params;

  try {
    await userModel.findByIdAndDelete(id);
    res.status(200).send({ data: "Deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, findOne, remove, update, create };
