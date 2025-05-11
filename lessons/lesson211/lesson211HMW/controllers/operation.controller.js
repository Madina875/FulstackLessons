const Operation = require("../schemas/Operation");

const getAll = async (req, res) => {
  try {
    const operations = await Operation.find()
      .populate("order_id")
      .populate("status_id")
      .populate("admin_id");
    res.status(200).send({ data: operations });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const operation = await Operation.findById(id);

    res.status(200).send({ operation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

// const create = async (req, res) => {
//   try {
//     const data = req.body;
//     const newClient = await Client.create(data);
//     res.status(201).send({ data: newClient });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: "Serverda xatolik" });
//   }
// };

const create = async (req, res) => {
  try {
    const newOper = await Operation.create(req.body);
    res.status(201).send({ message: "New operation added", newOper });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Operation.findByIdAndDelete(id);
    res.status(200).send({ data: "operation deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    let updateOper = await Operation.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateOper });
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
