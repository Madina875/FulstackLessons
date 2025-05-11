const { Schema, model } = require("mongoose");
const Department = require("./Department");

const workerSchema = new Schema(
  {
    first_name: { type: String, trim: true, required: true },
    last_name: { type: String, trim: true },
    age: { type: Number, min: 18 },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
    subDepartment: Department.schema,
    subDepartment: [Department.schema],
  },
  { versionKey: false, timestamps: false }
);

module.exports = model("Workers", workerSchema);

