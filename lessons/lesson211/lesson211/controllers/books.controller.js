const { default: mongoose } = require("mongoose");
const Books = require("../schemas/Books");
const { sendErrorResponse } = require("../helpers/send_error_response");

//
const addBook = async (req, res) => {
  try {
    const body = req.body;
    const newBook = await Books.create(body);
    await newBook.validate();
    res.status(201).send({ message: "New book added", newBook });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

//
const getAllBooks = async (req, res) => {
  try {
    //select aynan nimalarni userga korsatish :
    const books = await Books.find().select("name");
    res.status(200).send({ books });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

//from params
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const book = await Books.findById(id);
    if (!book) {
      return res.status(404).send({ message: "book not found" });
    }
    res.status(200).send({ book });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

//from params
const getBookByName = async (req, res) => {
  try {
    const { name } = req.params;
    const book = await Books.findOne({
      name: { $regex: new RegExp(name, "i") },
    });
    res.status(200).send({ book });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

//
const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const book = await Books.deleteOne({ _id: id });
    if (!book.deletedCount == 0) {
      return res.status(404).send({ message: "book not found" });
    }
    res.status(200).send({ message: "book deleted successfily ✅" });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

//
const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author, price, year } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "ID incorrect" });
    }
    const book = await Books.updateOne(
      { _id: id },
      { name, author, price, year }
    );
    console.log(book);
    if (book.matchedCount == 0) {
      return res.status(404).send({ message: "book not found" });
    }
    res.status(200).send({ message: "book updated" });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const getBooksByName = async (req, res) => {
  try {
    const { name } = req.params;
    const books = await Books.findByName(name);
    if (books.length == 0) {
      return res.status(404).send({ Message: "Bunday kitob topilmadi!" });
    }
    res.status(200).send({ books });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

//------------------------------------------------------------------//

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  getBookByName,
  deleteBookById,
  updateBookById,
  getBooksByName,
};
