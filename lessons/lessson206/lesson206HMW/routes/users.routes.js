const {
  createUser,
  getAllUsers,
  getUserById,
  removeUserById,
  updateUserById,
  filterStadion,
  // callProcedureUsers,
  findUsersByPhone,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/create", createUser);
router.get("/all", getAllUsers);
//
// router.get("/proce", callProcedureUsers);

//
router.post("/findByPhone", findUsersByPhone);

router.get("/:id", getUserById);
router.delete("/:id", removeUserById);
router.patch("/:id", updateUserById);

//----------------------------------------
module.exports = router;
