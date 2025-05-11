const { Schema, model } = require("mongoose");

const operationSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    status_id: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
    operationDate: {
      type: Date,
    },
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
    description: {
      type: String,
      maxLenght: [100, "operation character's limit is 100"],
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Operation", operationSchema);
