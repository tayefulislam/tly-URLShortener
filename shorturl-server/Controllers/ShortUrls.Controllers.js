const { makeShortUrlServices } = require("../Services/ShortUrls.Services");

exports.makeShortUrlController = async (req, res, next) => {
  const newShortUrl = req.body;
  console.log(newShortUrl);

  try {
    const result = await makeShortUrlServices(newShortUrl);
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Url Short request failed",
      error: error.message,
    });
  }
};
