const express = require("express");
const router = express.Router();

const Url = require("../db/models/Url");

//@route  GET /:code
//@desc   Redirect to original URL

router.get("/:code", async (req, res, next) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (!url) {
      return res.send(500);
    }
    return res.redirect(url.longUrl);
  } catch (error) {}
});

module.exports = router;
