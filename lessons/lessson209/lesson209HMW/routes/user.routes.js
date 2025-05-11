const { Router } = require("express");
const {
  findAll,
  findOne,
  create,
  update,
  remove,
  findByName,
  findByDate,
} = require("../controllers/user.controller");
let router = Router();

router.get("/", findAll);
router.post("/create", create);
//homework
router.post("/fyear", findByDate);
router.post("/fname", findByName);

router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
