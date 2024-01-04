const express = require("express");
const router = express.Router();

const ShortUrlsController = require("../Controllers/ShortUrls.Controllers");

router.route("/").post(ShortUrlsController.makeShortUrlController);

router.route("/:id").get(ShortUrlsController.getUrlByShortRouteController);

module.exports = router;
