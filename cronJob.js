const cron = require("node-cron");
const axios = require("axios");
const Crypto = require("./models/cryptoModel"); // Adjust the path to your model

// Function to fetch cryptocurrency data from CoinGecko API
const fetchCoinData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error);
  }
};

// Function to save fetched data into MongoDB
const saveToDatabase = async (data) => {
  const cryptoDataArray = Object.keys(data).map((coin) => ({
    coin,
    price: data[coin].usd,
    marketCap: data[coin].usd_market_cap,
    change24h: data[coin].usd_24h_change,
    timestamp: new Date(),
  }));

  try {
    await Crypto.insertMany(cryptoDataArray);
    console.log("Data successfully stored in the database.");
  } catch (error) {
    console.error("Error saving data to the database:", error);
  }
};

// Schedule the cron job to run , This job should run once every 2 hours
const startCronJob = () => {
  cron.schedule('0 */2 * * *', async () => {
    console.log("Running Cron Job - Fetching and storing cryptocurrency data");

    const data = await fetchCoinData();
    if (data) {
      await saveToDatabase(data);
    }
  });
};

// Export the function to start the cron job
module.exports = startCronJob;
