const ShortUrls = require("../models/ShortUrls");

exports.makeShortUrlServices = async (newShortUrl) => {
  const result = await ShortUrls.create(newShortUrl);
  //   console.log("check from services", result);
  return result;
};

exports.getUrlByShortRouteServices = async (id) => {
  console.log("check id ", id);
  const result = await ShortUrls.findOne({ shortRoute: id });
  return result;
};
