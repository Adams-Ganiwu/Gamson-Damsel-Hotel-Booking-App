const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome To Gamson Damsel Hotel Booking App</h1>");    
});




const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

