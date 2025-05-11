const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number },
    year: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Book", bookSchema);

