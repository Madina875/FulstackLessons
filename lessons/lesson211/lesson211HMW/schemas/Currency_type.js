const { Schema, model } = require("mongoose");

const currency_typeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },

  {
    versionKey: false,
  }
);

module.exports = model("Currency_type", currency_typeSchema);
