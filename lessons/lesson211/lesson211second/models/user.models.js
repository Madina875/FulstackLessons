const { number } = require("joi");
const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    full_name: {
      type: String,
      maxLength: 25,
      minLength: 3,
      required: [true, "Full name is NOT GIVEN "],
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: [true, "email is NOT GIVEN "],
      validation: {
        validate: (email) => {
          return `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`.test(email);
        },
      },
    },
    phone: {
      type: String,
      required: [true, "Phone is required "],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("client", clientSchema);
