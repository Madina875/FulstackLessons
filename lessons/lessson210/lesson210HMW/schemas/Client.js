const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      maxlength: 15,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    orders: [
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

module.exports = model("Client", clientSchema);
