const Client = require("../schemas/Client");

const getAll = async (req, res) => {
  try {
    const clients = await Client.find().populate("orders");
    res.status(200).send({ data: clients });
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
    const data = req.body;
    const newClient = await Client.create(data);
    res.status(201).send({ data: newClient });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Client.findByIdAndDelete(id);
    res.status(200).send({ data: "client deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    let updateClient = await Client.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateClient });
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
