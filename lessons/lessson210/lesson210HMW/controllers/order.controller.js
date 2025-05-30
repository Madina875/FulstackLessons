const { default: mongoose } = require("mongoose");
const Order = require("../schemas/Order");
const Client = require("../schemas/Client");
const dotenv = require("dotenv");
const Currency_type = require("../schemas/Currency_type");

const getAll = async (req, res) => {
  try {
    // const orders = await Order.find().select("name");
    const orders = await Order.find();
    res.status(200).send({ data: orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.body;
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
    const createOrder = await Order.create(data);
    const client = await Client.findById(data.client_id);
    const currency_type = await Currency_type.findById(data.currency_type_id);
    currency_type.orders.push(createOrder._id);
    client.orders.push(createOrder._id);
    await client.save();

    res.status(201).send({ data: createOrder });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete({ id });
    res.status(200).send({ data: "order deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateOrder = await Order.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateOrder });
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
