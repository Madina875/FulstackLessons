const db = require("../config/db");
const queryGenerate = require("../helpers/query.generate");

const findAll = (req, res) => {
  let { limit, offset } = req.query;

  limit = limit ? limit : 10;
  offset = offset ? offset : 1;

  db.query(
    `select * from \`orders\` limit ${limit} offset ${(offset - 1) * limit}`,
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
  db.query(`select * from 'orders' where id = ?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send(result);
  });
};

const create = (req, res) => {
  let {
    user_id,
    deliver_id,
    water_count,
    total_price,
    date,
    promised_time,
    status,
  } = req.body;
  db.query(
    `insert into 'orders' (user_id,deliver_id,water_count,total_price, date, promised_time,status) 
    values (?,?,?,?,?,?,?)`,
    [
      user_id,
      deliver_id,
      water_count,
      total_price,
      date,
      promised_time,
      status,
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
    `update order SET ${updateValue} where id = ?`,
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
  `delete 'orders' where id = ?`,
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
