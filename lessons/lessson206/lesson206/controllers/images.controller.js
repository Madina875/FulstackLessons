const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getImagesById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM images where id=${id}`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const updateImagesById = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  db.query(
    `update images set ${updateValue} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(200).send({ message: `${err.message}` });
      }
      res.status(200).send({ message: "image updated successfully" });
    }
  );
};

const createImages = (req, res) => {
  const { image_url } = req.body;
  db.query(
    `
    INSERT INTO images (image_url) VALUES(?)`,
    [image_url],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res
        .status(201)
        .send({ message: "Yangi image qoshildi", imageId: result.insertId });
    }
  );
};

const removeImagesById = (req, res) => {
  const { id } = req.params;
  db.query(`delete from images where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: `${err.message}` });
    }
    res.status(200).send({ message: "image deleted successfully" });
  });
};

const getAllImages = (req, res) => {
  db.query(`SELECT * FROM images`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

module.exports = {
  getAllImages,
  getImagesById,
  createImages,
  removeImagesById,
  updateImagesById,
};
