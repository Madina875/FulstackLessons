const { Schema, model } = require("mongoose");
const Currency_type = require("./Currency_type");

const orderSchema = new Schema(
  {
    client_id: { type: Number, required: true },
    product_link: { type: String, required: true },
    quantity: { type: String, required: true },
    summa: { type: String, required: true },
    currency_type_id: { type: Number, required: true },
    truck: { type: String, required: true },
    description: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Order", orderSchema);
