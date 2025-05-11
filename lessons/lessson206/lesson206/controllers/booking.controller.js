const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getBookingById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT *FROM booking where id=${id}`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const createBooking = (req, res) => {
  const { booking_date, start_time, end_time, total_price, status } = req.body;
  db.query(
    `
    INSERT INTO booking ( booking_date, start_time, end_time, total_price, status ) VALUES(?,?,?,?,?)
    `,
    [booking_date, start_time, end_time, total_price, status],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.status(201).send({
        message: "Yangi booking qoshilid",
        bookingId: result.insertId,
      });
    }
  );
};

const removeBookingById = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM booking where id=?`, [id], (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.status(200).send({ message: "Booking deleted successfilly" });
  });
};

const updateBookingById = (req, res) => {
  const { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  db.query(
    `update booking set ${updateValue} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(200).send({ message: `${err.message}` });
      }
      res.status(200).send({ message: "booking updated successfully" });
    }
  );
};

const getBookingAll = (req, res) => {
  db.query(`select * from booking`, (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const CountBookingNUM = (req, res) => {
  let { stadion_id } = req.body;
  let { owner_id } = req.body;
  let { booking_date } = req.body;

  db.query(
    `
  SELECT count(${stadion_id}) from booking b
  LEFT JOIN stadium s ON b.id = s.${owner_id}
  where ${booking_date} BETWEEN '2025-01-01' and '2025-05-01'
`,
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.send(result);
    }
  );
};

module.exports = {
  getBookingAll,
  getBookingById,
  createBooking,
  removeBookingById,
  updateBookingById,
  CountBookingNUM,
};
