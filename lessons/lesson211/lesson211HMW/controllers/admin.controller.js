const Admin = require("../schemas/Admin");

const getAll = async (req, res) => {
  try {
    const admins = await Admin.find().populate("operation_id");
    res.status(200).send({ admins });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Admin.findById(id);
    res.status(200).send({ client });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const newClient = await Admin.create(data);
    res.status(201).send({ data: newClient });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Admin.findByIdAndDelete(id);
    res.status(200).send({ data: "admin deleted successfily ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    let updateClient = await Admin.findByIdAndUpdate(id, data);
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
