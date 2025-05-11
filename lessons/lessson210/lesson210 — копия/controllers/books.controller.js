const { default: mongoose } = require("mongoose");
const Books = require("../schemas/Books");

//
const addBook = async (req, res) => {
  try {
    const { name, author, price, year } = req.body;
    const newBook = await Books.create({ name, author, price, year });
    res.status(201).send({ message: "New book added", newBook });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
  }
};

//
const getAllBooks = async (req, res) => {
  try {
    //select aynan nimalarni userga korsatish :
    const books = await Books.find().select("name");
    res.status(200).send({ books });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
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
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
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
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
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
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
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
    console.log(error);
    res.status(500).send({ error: "Serverda xatolik" });
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
};
