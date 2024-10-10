# CryptoAnalytics 🪙

## Overview

CryptoAnalytics is a Node.js application that fetches and stores cryptocurrency data from the CoinGecko API. It tracks the current price, market cap, and 24-hour change for Bitcoin, Ethereum, and Matic, storing this information in a MongoDB database. The application also provides an API for retrieving the latest statistics and the standard deviation of prices for the last 100 records.

- Link1 : https://y5g6o7ne1k.execute-api.ap-south-1.amazonaws.com/api/stats?coin=bitcoin
- Link2 : https://y5g6o7ne1k.execute-api.ap-south-1.amazonaws.com/api/deviation?coin=bitcoin
## Features ✨

- Fetch cryptocurrency data every 2 hours using a cron job.
- API endpoints to retrieve:
  - Latest price, market cap, and 24-hour change.
  - Standard deviation of the last 100 price records.
- Data is stored in a MongoDB database.

## ScreenShot 🍀
![image](https://github.com/user-attachments/assets/378cd960-8d14-439b-b697-ff0075d1da6c)
![image](https://github.com/user-attachments/assets/919868fe-7c72-423a-b4fa-9eaf79d85d52)
![Screenshot 2024-10-10 152528](https://github.com/user-attachments/assets/9d3fbbe2-6280-4000-bee1-1f6d81d1738d)


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
