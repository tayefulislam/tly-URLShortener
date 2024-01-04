const mongoose = require("mongoose");

const ShortUrlsSchema = mongoose.Schema(
  {
    fullLink: {
      type: "String",
      trim: true,
    },
    shortRoute: {
      type: "String",
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const ShortUrls = mongoose.model("ShortUrls", ShortUrlsSchema, "ShortUrls");

module.exports = ShortUrls;
