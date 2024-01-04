const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// add route

const ShortUrlsRoute = require("./routes/ShortUrls.route");

app.get("/", (req, res) => {
  res.send("App Working");
});

app.use("/api/v1/urlShortener/", ShortUrlsRoute);

module.exports = app;
