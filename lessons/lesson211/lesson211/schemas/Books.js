const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true,
    },
    author: { type: String, required: true, lowercase: true },
    price: {
      type: Number,
      get: getPrice,
      set: setPrice,
      min: [1, "Kitob tekin bolishi mumkin emas"],
      max: [10000000000, "kitob bebaho bolishi mumkin emas "],
    },
    year: { type: Number },

    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "iltimos emailni togri kiriting",
      ],
    },
    password: {
      type: String,
      minLength: [6, "parol 6 ta beligdan kam bolishi mumkin emas"],
      maxLength: [100, "parol 100 ta beligdan uzun bolishi mumkin emas"],
    },

    gender: {
      type: String,
      // enum: ["Erkak", "Ayol"],
      enum: {
        values: ["Erkak", "Ayol"],
        message: `{VALUE} noto'g'ri `,
      },
    },

    phone: {
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
    isMarried: Boolean,

    wife: {
      type: Object,
      required: function () {
        return this.isMarried;
      },
      name: String,
      age: Number,
    },
  },

  {
    versionKey: false,
    timestamps: true,
    toJSON: { getters: true },
  }
);

function getPrice(price) {
  return (price / 100).toFixed(2);
}

function setPrice(price) {
  return price * 100;
}

module.exports = model("Book", bookSchema);

