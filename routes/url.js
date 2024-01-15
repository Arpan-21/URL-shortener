const express = require("express");
const {
  handleUrlGeneration,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleUrlGeneration);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
