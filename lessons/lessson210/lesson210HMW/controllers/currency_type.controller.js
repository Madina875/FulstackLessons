const { default: mongoose } = require("mongoose");
const Currency_type = require("../schemas/Currency_type");

const getAll = async (req, res) => {
  try {
    const currency_types = await Currency_type.find();
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

const create = async (req, res) => {};

const remove = async (req, res) => {};

const update = async (req, res) => {
  let;
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
