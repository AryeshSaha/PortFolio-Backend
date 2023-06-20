const mongoose = require("mongoose");
require("dotenv").config();

const AdminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "Aryesh Saha",
    },
    email: {
      type: String,
      required: true,
      default: "aryeshsaha5302@gmail.com",
    },
    password: {
      type: String,
      required: true,
      default: process.env.PASSWORD,
    },
    phone: {
      type: Number,
      validate: {
        validator: function (value) {
          return String(value).length === 10;
        },
        message: "Phone number must be exactly 10 digits long.",
      },
      default: process.env.PHONE,
    },
    address: {
      city: { type: String, required: true },
      state: { type: String, required: true },
    },
    socials: {
      linkedIn: String,
      github: String,
      whatsapp: Number,
      // twitter:String,
      // instagram:String,
      // facebook:String,
    },
    picture: {
      type: String,
      default:
        "https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png",
    },
    age: {
      type: Number,
      default: function () {
        const birthYear = new Date(process.env.DOB);
        const now = new Date();

        let age = now.getFullYear() - birthYear.getFullYear();

        // Check if the current month and day are before the birth month and day
        if (
          now.getMonth() < birthdateObj.getMonth() ||
          (now.getMonth() === birthdateObj.getMonth() &&
            now.getDate() < birthdateObj.getDate())
        ) {
          age--;
        }
        return age;
      },
    },
    projectCount: Number,
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
