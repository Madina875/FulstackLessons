const {
  findAll,
  findOne,
  create,
  remove,
  update,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/create", create);
router.delete("/:id", remove);
router.patch("/:id", update);

module.exports = router;

