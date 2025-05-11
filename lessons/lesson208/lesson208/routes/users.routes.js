const { Router } = require("express");
let router = Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  removeUserById,
  updateUserById,
  // getUserByRole,
  // getAllParts,
  // usersFindStadion,
  callProcedureUsers,
} = require("../controllers/users.controller");

router.post("/create", createUser);
router.get("/all", getAllUsers);
// router.get("/search", getUserByRole);
// router.get("/usearch", getAllParts);

router.get("/proce", callProcedureUsers);

// router.get("/findstadium", usersFindStadion);
router.get("/:id", getUserById);
router.delete("/:id", removeUserById);
router.patch("/:id", updateUserById);

module.exports = router;
