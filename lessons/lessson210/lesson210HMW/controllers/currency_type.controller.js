const { default: mongoose } = require("mongoose");
const Currency_type = require("../schemas/Currency_type");

const getAll = async (req, res) => {
  try {
    const currency_types = await Currency_type.find().populate("orders");
    res.status(200).send({ currency_types });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currency_type = await Currency_type.findById(id);
    if (!currency_type) {
      return res.status(404).send({
        message: "currency type not found 😕",
      });
    }
    res.status(200).send({ currency_type });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const newType = await Currency_type.create(data);
    res.status(201).send({ message: "New type added", newType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const ctype = await Currency_type.deleteOne({ _id: id });
    res.status(200).send({ message: "type deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const ctype = await Currency_type.updateOne(
      { _id: id },
      { name, description }
    );
    console.log(ctype);
    if (ctype.matchedCount == 0) {
      return res.status(404).send({ message: "type not found" });
    }
    res.status(200).send({ message: "ctype updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
