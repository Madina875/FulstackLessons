const { sendErrorResponse } = require("../helpers/send_error_response");
const Category = require("../schemas/Category");

const create = async (req, res) => {
  try {
    const data = req.body;
    const newCategory = await Category.create(data);

    res.status(201).send({ message: "New category added", newCategory });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const getAll = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).send({ category });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const category = await Category.findById(id);
    res.status(200).send({ category });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).send({ message: "Category deleted successfilly✅" });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

async function update(req, res) {
  let data = req.body;
  let { id } = req.params;
  try {
    let updateUser = await Category.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateUser });
  } catch (error) {
    sendErrorResponse(error, res);
  }
}

module.exports = { create, getAll, getById, remove, update };
