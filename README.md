# CryptoAnalytics

## Overview

CryptoAnalytics is a Node.js application that fetches and stores cryptocurrency data from the CoinGecko API. It tracks the current price, market cap, and 24-hour change for Bitcoin, Ethereum, and Matic, storing this information in a MongoDB database. The application also provides an API for retrieving the latest statistics and the standard deviation of prices for the last 100 records.

## Features

- Fetch cryptocurrency data every 2 hours using a cron job.
- API endpoints to retrieve:
  - Latest price, market cap, and 24-hour change.
  - Standard deviation of the last 100 price records.
- Data is stored in a MongoDB database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Axios
- Node-Cron
- CoinGecko API

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YashkShrivas4491/CryptoAnalytics.git
