const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getAllReview = (req, res) => {
  db.query(`select * from review`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const getReviewById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM review where id=${id}`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const createReview = (req, res) => {
  const { rating, comment } = req.body;
  db.query(
    `
    INSER INTO review (rating,comment) VALUES(?,?)
    `,
    [rating, comment],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res
        .status(201)
        .send({ message: "Yabgi review qoshilid", reviewId: result.insertId });
    }
  );
};

const updateReviewById = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  db.query(
    `update review set ${updateValue} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(200).send({ message: `${err.message}` });
      }
      res.status(200).send({ message: "Review updated successfully" });
    }
  );
};

const removeReviewById = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM review where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.status(200).send({ message: "Review deleted successfully" });
  });
};

module.exports = {
  getAllReview,
  getReviewById,
  createReview,
  removeReviewById,
  updateReviewById,
};
