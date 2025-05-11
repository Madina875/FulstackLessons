const db = require("../config/db");
const { link } = require("../routes/users.routes");
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
  db.query(`SELECT * FROM users`, (error, result) => {
    if (error) {
      console.log(`Error get all user`, error);
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
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

const getUserByRole = (req, res) => {
  let { role } = req.body;
  let data = req.body;
  db.query(`select * from users where role=?`, [role], (err, result) => {
    if (err) {
      return res.status(500).send({ message: `${err.message}` });
    }
    res.send(result);
  });
};

// const getAllParts = (req, res) => {
//   let { first_name, last_name, email, phone, role } = req.body;
//   let where = "true";
//   if (first_name) {
//     where += ` AND first_name like '%${first_name}$'`;
//   }
//   if (last_name) {
//     where += ` AND last_name like '%${last_name}%'`;
//   }
//   if (email) {
//     where += ` AND email like '%${email}%'`;
//   }
//   if (phone) {
//     where += ` AND phone like '%${phone}%'`;
//   }
//   if (role) {
//     where += ` AND role like '%${role}%'`;
//   }

//   if (where == "true") {
//     return res
//       .status(400)
//       .send({ message: "qidirish parametrlarini kiriting" });
//   }
//   db.query(`select * from users where ${where} `, (err, result) => {
//     if (err) {
//       return res.status(500).send({ message: `${err.message}` });
//     }
//     res.send(result);
//   });
// };

// const usersFindStadion = (req, res) => {
//   let { first_name, last_name } = req.body;
//   db.query(
//     `
//     SELECT * from users u 
//     LEFT JOIN stadium s ON u.id = s.owner_id
//     LEFT JOIN images i ON s.id = i.stadion_id
//     where first_name='${first_name}' and last_name='${last_name}'
//     `,
//     [first_name, last_name],
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({ message: `${err.message}` });
//       }
//       res.send(result);
//     }
//   );
// };

const callProcedureUsers = (req, res) => {
  db.query("call getAllUsers()", (err, result) => {
    if (err) {
      return res.status(500).send({ message: `${err.message}` });
    }
    res.send(result);
  });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  removeUserById,
  updateUserById,
  getUserById,
  getUserByRole,
  // getAllParts,
  // usersFindStadion,
  callProcedureUsers
};
