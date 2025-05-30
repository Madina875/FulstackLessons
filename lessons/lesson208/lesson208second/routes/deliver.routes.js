const { Router } = require("express");
const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/deliver.controller");
let router = Router();

router.get("/", findAll);
router.post("/create", create);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
