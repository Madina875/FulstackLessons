const Department = require("../schemas/Department");

const addDep = async (req, res) => {
  try {
    const newDep = await Department.create(req.body);
    res.status(201).send({ message: "New department added", newDep });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const getAllDeps = async (req, res) => {
  try {
    //select aynan nimalarni userga korsatish :
    const deps = await Department.find().populate("workers");
    res.status(200).send({ deps });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

module.exports = {
  addDep,
  getAllDeps,
};


