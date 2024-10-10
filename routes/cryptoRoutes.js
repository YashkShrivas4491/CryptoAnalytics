const express = require("express");
const {
  getCryptoStats,
  getPriceDeviation,
} = require("../controllers/cryptoController");

const router = express.Router();

// GET /stats route to fetch latest data for a coin
router.get("/stats", getCryptoStats);

// GET /deviation route to fetch the price deviation for a coin
router.get("/deviation", getPriceDeviation);

module.exports = router;
