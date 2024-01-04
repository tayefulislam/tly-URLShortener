const ShortUrls = require("../models/ShortUrls");

exports.makeShortUrlServices = async (newShortUrl) => {
  const result = await ShortUrls.create(newShortUrl);
  console.log("check from services", result);
  return result;
};
