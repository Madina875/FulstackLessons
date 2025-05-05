const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    client_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Client",
      },
    ],
    product_link: { type: String, required: true },
    quantity: { type: String, required: true },
    summa: { type: String, required: true },
    currency_type_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Currency_type",
      },
    ],
    truck: { type: String, required: true },
    description: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);

//1ga kop bolsa - array || else : object
