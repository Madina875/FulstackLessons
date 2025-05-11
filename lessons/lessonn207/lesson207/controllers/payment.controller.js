const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getPaymentAll = (req, res) => {
  db.query(`select * from payment`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const getPaymentById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM payment where id=${id}`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const createPayment = (req, res) => {
  const { payment_method, payment_time, amount } = req.body;
  db.query(
    `
    INSER INTO review (payment_method,payment_time,amount) VALUES(?,?,?)
    `,
    [payment_method, payment_time, amount],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.status(201).send({
        message: "Yabgi payment qoshilid",
        paymentId: result.insertId,
      });
    }
  );
};

const updatePaymentById = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  db.query(
    `update payment set ${updateValue} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(200).send({ message: `${err.message}` });
      }
      res.status(200).send({ message: "Payment updated successfully" });
    }
  );
};

const removePaymentById = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM payment where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.status(200).send({ message: "Payment deleted successfully" });
  });
};

module.exports = {
  getPaymentAll,
  getPaymentById,
  createPayment,
  updatePaymentById,
  removePaymentById,
};
