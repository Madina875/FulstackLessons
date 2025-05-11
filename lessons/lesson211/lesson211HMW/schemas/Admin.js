const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    operation_id: {
      type: Schema.Types.ObjectId,
      ref: "Operation",
    },
    full_name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    user_name: {
      type: String,
      unique: true,
      lowecase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      minLenght: [3, "parol 3 ta belgidan kam bolmasligi zarur"],
      maxLength: [8, "parol 8 ta belgidan oshmasligi zarur"],
    },
    phone_number: {
      type: String,
      validate: {
        validator: function (value) {
          return /^\d{2}-\d{3}-\d{2}-\d{2}/.test(value);
        },
        message: (props) =>
          `${props.value} - raqam not'g'ri , andozaga mos emas `,
      },
      alias: "tel",
    },
    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "iltimos emailni togri kiriting",
      ],
    },
    tg_link: {
      type: String,
    },
    token: {
      type: String,
    },
    is_creator: Boolean,
    is_active: Boolean,

    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Admin", adminSchema);
