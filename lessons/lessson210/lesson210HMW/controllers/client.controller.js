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

const create = async (req, res) => {};

const remove = async (req, res) => {};

const update = async (req, res) => {
  let { id } = req.params;
  let data = req.body;
  try {
    const client = await Client.updateOne({ _id: id }, { body });
    console.log(book);
    if (client.matchedCount == 0) {
      return res.status(404).send({ message: "client not found" });
    }
    res.status(200).send({ message: "client updated" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
