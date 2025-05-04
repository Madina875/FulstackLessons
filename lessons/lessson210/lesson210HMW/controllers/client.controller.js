const { default: mongoose } = require("mongoose");
const Client = require("../schemas/Client");

const getAll = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).send({ clients });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).send({
        message: "there are not any clients which are working on you 😕",
      });
    }
    res.status(200).send({ client });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const create = async (req, res) => {
  try {
    const { full_name, phone_number, address, email } = req.body;
    const newClient = await Client.create({
      full_name,
      phone_number,
      address,
      email,
    });
    res.status(201).send({ message: "New client added", newClient });
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
    const book = await Client.deleteOne({ _id: id });
    res.status(200).send({ message: "client deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, phone_number, address, email } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const client = await Client.updateOne(
      { _id: id },
      { full_name, phone_number, address, email }
    );
    console.log(client);
    if (client.matchedCount == 0) {
      return res.status(404).send({ message: "client not found" });
    }
    res.status(200).send({ message: "client updated" });
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
