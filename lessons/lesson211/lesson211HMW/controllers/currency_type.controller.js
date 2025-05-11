const Currency_type = require("../schemas/Currency_type");

async function create(req, res) {
  let data = req.body;
  try {
    let currency = await Currency_type.create(data);
    res.status(201).send({ data: currency });
  } catch (error) {
    console.log(error.message);
  }
}

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let currencies = await Currency_type.find({});
    res.status(200).send({ data: currencies });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let currency = await Currency_type.findById(id);
    res.status(200).send({ data: currency });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateCurrency = await Currency_type.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    res.status(200).send({ data: updateCurrency });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await Currency_type.findByIdAndDelete(id);
    res.status(200).send({ message: "Currency type deleted" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
