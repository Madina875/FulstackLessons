const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const createUser = (req, res) => {
  const { first_name, last_name, email, password, phone, role } = req.body;
  db.query(
    `
        INSERT INTO users (first_name,last_name,email,password,phone,role)
        VALUES(?,?,?,?,?,?)
        `,
    [first_name, last_name, email, password, phone, role],
    (error, result) => {
      if (error) {
        console.log(`Error adding new user`, error);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      console.log(result);
      res
        .status(201)
        .send({ message: "Yangi user qoshildi", userId: result.insertId });
    }
  );
};
const getAllUsers = (req, res) => {
  console.log("salom");
  db.query(
    `SELECT * FROM users join review on users.id=review.user_id `,
    (error, result) => {
      if (error) {
        console.log(`Error get all user`, error);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.send(result);
    }
  );
};

const getUserById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM users where id=${id}`, (error, result) => {
    if (error) {
      console.log(`Error get all user`, error);
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const removeUserById = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM users where id=?`, [id], (err, result) => {
    if (err) {
      console.log(`Error get all user`, err);
      return res.status(500).send({ message: `${err.message}` });
    }
    res.status(200).send({ message: "User deleted successfully" });
  });
};

const updateUserById = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);
  console.log(updateValue);
  db.query(
    `UPDATE users SET ${updateValue} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(200).send({ message: `${err.message}` });
      }
      res.status(200).send({ message: "User updated successfully" });
    }
  );
};

//

// const callProcedureUsers = (req, res) => {
//   db.query("call getAllUsers()", (err, result) => {
//     if (err) {
//       return res.status(500).send({ message: `${err.message}` });
//     }
//     res.send(result);
//   });
// };

//

// SELECT first_name as "name", ${phone}, s.name as 'stadion_nomi',
// s.owner_id from users
// left join stadium s ON s.owner_id
// ORDER BY s.owner_id; where phone=?`,

//---------------------------------------------------------------------------------

const findUsersByPhone = (req, res) => {
  let { phone } = req.body;
  db.query(
    `
    SELECT first_name, u.last_name, u.phone, s.name, r.comment
     FROM users u join review r on u.id = r.user_id
     join stadium s on r.stadion_id = s.id
     where u.phone like '%${phone}%'
     `,
    (error, result) => {
      if (error) {
        console.log(`Error get all user`, error);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.send(result);
    }
  );
};

// ------------------------------------------------------------------------------

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  removeUserById,
  updateUserById,
  findUsersByPhone,
  // callProcedureUsers
};
