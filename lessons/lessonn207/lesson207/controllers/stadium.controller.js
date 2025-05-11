const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getStadiumAll = (req, res) => {
  db.query("SELECT * FROM stadium", (err, result) => {
    if (err) {
      res.status(500).send({ message: "serverda xatolik" });
    }
    res.send(result);
  });
};

const getOneStadiumById = (req, res) => {
  let { id } = req.params;
  db.query("SELECT * FROM stadium where id=?", [id], (err, result) => {
    if (err) {
      res.status(500).send({ message: "serverda xatolik" });
    }
    res.send(result);
  });
};

const createStadium = (req, res) => {
  const { name, location, address, description, price } = req.body;
  db.query(
    `
    INSERT INTO stadium (name, location, address, description, price)
    VALUES(?,?,?,?,?)
    `,
    [name, location, address, description, price],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res
        .status(201)
        .send({ message: "Yangi user qoshildi", userId: result.insertId });
    }
  );
};

const updateStadiumById = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  db.query(
    `UPDATE stadium SET ${updateValue} WHERE id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(200).send({ message: `${err.message}` });
      }
      res.status(200).send({ message: "User updated successfully" });
    }
  );
};

const removeStadiumById = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM stadium WHERE id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: `${err.message}` });
    }
    res.status(200).send({ message: "user deleted successfully" });
  });
};

module.exports = {
  getStadiumAll,
  getOneStadiumById,
  createStadium,
  updateStadiumById,
  removeStadiumById,
};
