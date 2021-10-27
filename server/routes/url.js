const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");

const Url = require("../db/models/Url");

// @route POST /api/url/shorten
// @desc  Create short url
router.post("/shorten", async (req, res, next) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base Url");
  }

  //Create code
  const urlCode = shortId.generate();

  //Check long url from user
  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json("");
  }

  try {
    const shortUrl = `${baseUrl}/${urlCode}`;
    const url = new Url({
      longUrl,
      shortUrl,
      urlCode,
      date: new Date(),
    });
    await url.save();
    res.json(url);
  } catch (error) {
    console.log(error);
    res.status(401).json("Wrong url");
  }
});

module.exports = router;
