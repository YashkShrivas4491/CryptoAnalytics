const express = require("express");
const connectDB = require("./db");
const cryptoRoutes = require("./routes/cryptoRoutes");
const startCronJob = require("./cronJob"); 
const serverless = require("serverless-http"); 
const app = express();

// const PORT = process.env.PORT || 3000;


// Basic route
app.get("/", function(req, res) {
    res.send("Assignment Completed ✅");
})


// Connect to the database
connectDB();

// Start the cron job
startCronJob(); // This will now correctly start the cron job

// Middleware
app.use(express.json()); // To parse JSON bodies

// Routes
app.use("/api", cryptoRoutes);


// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


module.exports.handler = serverless(app);