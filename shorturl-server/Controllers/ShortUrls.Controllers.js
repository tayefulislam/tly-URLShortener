const {
  makeShortUrlServices,
  getUrlByShortRouteServices,
} = require("../Services/ShortUrls.Services");

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

exports.getUrlByShortRouteController = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await getUrlByShortRouteServices(id);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Url Short request failed",
      error: error.message,
    });
  }
};
