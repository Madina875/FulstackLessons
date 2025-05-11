const db = require("../config/db");
const queryGenerate = require("../helpers/query.generate");

const findAll = (req, res) => {
  let { limit, offset } = req.query;

  limit = limit ? limit : 10;
  offset = offset ? offset : 1;

  db.query(
    `select * from user limit ${limit} offset ${(offset - 1) * limit}`,
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
  db.query(`select * from user where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send(result);
  });
};

const create = (req, res) => {
  let { first_name, last_name, phone_number, email, password } = req.body;
  db.query(
    `insert into user (first_name,last_name,phone_number,email,password) 
    values (?,?,?,?,?)`,
    [first_name, last_name, phone_number, email, password],
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
    `update user SET ${updateValue} where id=?`,
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
  `delete user where id = ?`,
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    };
};

//

const findByDate = (req, res) => {
  let date = req.body.date;
  db.query(
    `SELECT o.date, u.id, u.first_name, u.last_name, u.phone_number,
    u.email, u.password, o.promised_time, o.status
    from user u 
    LEFT JOIN orders o ON u.id = o.user_id
     WHERE o.date  BETWEEN ? AND CURRENT_Date ;
`,
    [date],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    }
  );
};
const findByName = (req, res) => {
  let { first_name } = req.body;
  db.query(
    `SELECT o.date, u.id, u.first_name, u.last_name, u.phone_number,
    u.email, u.password, o.promised_time, o.status , d.first_name as "deliver_name"
    from user u 
    left JOIN deliver d on u.id = d.id
    LEFT JOIN orders o ON u.id = o.user_id
    WHERE u.first_name = ?;
`,
    [first_name],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send(result);
    }
  );
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
  findByName,
  findByDate,
};
