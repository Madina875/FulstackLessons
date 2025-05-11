const Department = require("../schemas/Department");
const Workers = require("../schemas/Workers.");

const addWor = async (req, res) => {
  try {
    const { first_name, last_name, age, department, subDepartment } = req.body;
    const newWor = await Workers.create({
      first_name,
      last_name,
      age,
      department,
      subDepartment,
    });
    const dep = await Department.findById(department);
    dep.workers.push(newWor);
    await dep.save();

    res.status(201).send({ message: "New worker added", newWor });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const getAllWor = async (req, res) => {
  try {
    //select aynan nimalarni userga korsatish :
    // const wors = await Workers.find().populate("department", "name -_id");

    const wors = await Workers.find().populate({
      path: "department",
      match: { name: "Dasturlash", select: "name -_id" },
    });

    res.status(200).send({ wors });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

module.exports = {
  addWor,
  getAllWor,
};
