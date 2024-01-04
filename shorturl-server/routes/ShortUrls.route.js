const express = require("express");
const router = express.Router();

const ShortUrlsController = require("../Controllers/ShortUrls.Controllers");

router.route("/").post(ShortUrlsController.makeShortUrlController);

module.exports = router;
