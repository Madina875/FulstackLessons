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

const create = async (req, res) => {
  try {
    const {
      client_id,
      product_link,
      quantity,
      summa,
      currency_type_id,
      truck,
      desciption,
    } = req.body;
    const newOrder = await Order.create({
      client_id,
      product_link,
      quantity,
      summa,
      currency_type_id,
      truck,
      desciption,
    });
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
    const {
      client_id,
      product_link,
      quantity,
      summa,
      currency_type_id,
      truck,
      desciption,
    } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const order = await Order.updateOne(
      { _id: id },
      {
        client_id,
        product_link,
        quantity,
        summa,
        currency_type_id,
        truck,
        desciption,
      }
    );
    console.log(order);
    if (order.matchedCount == 0) {
      return res.status(404).send({ message: "order not found" });
    }
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
