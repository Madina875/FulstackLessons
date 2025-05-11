const {
  addBook,
  getAllBooks,
  getBookById,
  getBookByName,
  deleteBookById,
  updateBookById,
  getBooksByName,
} = require("../controllers/books.controller");
const router = require("express").Router();

router.post("/create", addBook);
router.get("/all", getAllBooks);
router.get("/name/:name", getBookByName);
router.get("/bookname/:name", getBooksByName);

router.get("/:id", getBookById);
router.delete("/:id", deleteBookById);
router.put("/:id", updateBookById);

module.exports = router;
