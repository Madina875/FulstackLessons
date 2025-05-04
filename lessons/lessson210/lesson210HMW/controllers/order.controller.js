const { default: mongoose } = require("mongoose");
const Order = require("../schemas/Order");

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
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).send({
        message: "i can't find any orders 😕",
      });
    }
    res.status(200).send({ order });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const create = async (req, res) => {};

const remove = async (req, res) => {};

const update = async (req, res) => {};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
