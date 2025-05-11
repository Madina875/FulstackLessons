const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Status", statusSchema);
