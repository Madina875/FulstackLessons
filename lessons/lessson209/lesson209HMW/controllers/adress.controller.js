const db = require("../config/db");
const queryGenerate = require("../helpers/query.generate");

const findAll = (req, res) => {
  let { limit, offset } = req.query;

  limit = limit ? limit : 10;
  offset = offset ? offset : 1;

  db.query(
    `select * from adress limit ${limit} offset ${(offset - 1) * limit}`,
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    }
  );
};

const findOne = (req, res) => {
  let { id } = req.params;
  db.query(`select * from adress where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send(result);
  });
};

const create = (req, res) => {
  let {
    user_id,
    region,
    street,
    house_number,
    intercom_number,
    intercom_code,
    home_num,
    location,
  } = req.body;
  db.query(
    `insert into adress (user_id,region, street, house_number, intercom_number, intercom_code, home_num, location) 
    values (?,?,?,?,?,?,?,?)`,
    [
      user_id,
      region,
      street,
      house_number,
      intercom_number,
      intercom_code,
      home_num,
      location,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    }
  );
};

const update = (req, res) => {
  let data = req.body;
  let { id } = req.params;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  db.query(
    `update adress SET ${updateValue} where id = ?`,
    [...values, id],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    }
  );
};

const remove = (req, res) => {
  let { id } = req.params;
  `delete adress where id = ?`,
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    };
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
