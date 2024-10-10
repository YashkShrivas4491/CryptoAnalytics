const Crypto = require("../models/cryptoModel");

// Fetch latest data for a coin
exports.getCryptoStats = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin) {
      return res.status(400).json({ message: "Coin parameter is required" });
    }

    // Find the latest data for the requested coin
    const cryptoData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });

    if (!cryptoData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({
      price: cryptoData.price,
      marketCap: cryptoData.marketCap,
      change24h: cryptoData.change24h,
    });
  } catch (error) {
    console.error("Error fetching crypto stats:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Calculate price deviation for a coin
exports.getPriceDeviation = async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ message: "Coin parameter is required." });
  }

  try {
    // Fetch the last 100 records for the requested coin
    const records = await Crypto.find({ coin })
      .sort({ timestamp: -1 }) // Sort by timestamp in descending order
      .limit(100);

    if (records.length === 0) {
      return res
        .status(404)
        .json({ message: "No records found for the specified coin." });
    }

    // Extract prices
    const prices = records.map((record) => record.price);

    // Calculate the standard deviation
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    const squaredDiffs = prices.map((price) => Math.pow(price - mean, 2));
    const stdDev = Math.sqrt(
      squaredDiffs.reduce((acc, diff) => acc + diff, 0) / squaredDiffs.length
    );

    return res.json({ deviation: stdDev.toFixed(2) }); // Return deviation rounded to 2 decimal places
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
