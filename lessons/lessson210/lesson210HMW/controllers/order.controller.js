const { default: mongoose } = require("mongoose");
const Order = require("../schemas/Order");
const Client = require("../schemas/Client");
const Currency_type = require("../schemas/Currency_type");

const getAll = async (req, res) => {
  try {
    // const orders = await Order.find().select("name");
    const orders = await Order.find();
    res.status(200).send({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getOne = async (req, res) => {
  const data = req.body;
  try {
    let createOrder = await Order.create(data);

    let client = await Client.findById(data.client_id);

    let currencyType = await Currency_type.findById(data.currency_type_id);
    client.orders.push(createOrder._id);
    currencyType.orders.push(currencyType._id);

    currencyType.save();
    client.save();

    res.status(200).send({ createOrder });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newOrder = await Order.create({ data });
    res.status(201).send({ newOrder });
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
    const order = await Order.deleteOne({ _id: id });
    res.status(200).send({ message: "order deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const order = await Order.updateOne({ _id: id }, { data });
    res.status(200).send({ message: "order updated" });
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
