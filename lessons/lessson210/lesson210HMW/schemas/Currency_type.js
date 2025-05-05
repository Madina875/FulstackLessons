const { Schema, model } = require("mongoose");

const currency_typeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    order_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Currency_type", currency_typeSchema);