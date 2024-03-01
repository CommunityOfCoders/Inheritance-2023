require("dotenv").config();
const express = require("express");
const cors= require("cors")
// const path = require("path");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const login_detail= require('./models/loginModel')
const app = express();
const PortfolioDetail = require('./models/portfolioModel');

//convert into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())




app.post('/signup', (req, res) => {
    const { username,email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: 'Error hashing password' });
        }

        // Save the hashed password in the database
        login_detail.create({username:username, email: email, password: hash })
            .then((login_detail) => {
                console.log('Data saved:', login_detail);
                res.json(login_detail);
            })
            .catch((err) => {
                console.error('Error saving data:', err);
                res.status(500).json({ error: 'Error saving data' });
            });
    });
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    login_detail.findOne({ email: email })
        .then((user) => {
            if (user) {
                // Compare passwords securely (using bcrypt or a similar library)
                if (user.password === password) {
                    res.json("SUCCESS"); // Return a consistent success message
                } else {
                    res.status(401).json('Incorrect password'); // Return 401 Unauthorized for incorrect password
                }
            } else {
                res.status(404).json('No such user'); // Return 404 Not Found if user doesn't exist
            }
        })
        .catch((err) => {
            console.error("Error during login:", err);
            res.status(500).json({ error: "Internal server error" }); // Return 500 Internal Server Error for any other error
        });
});



// app.post('/portfolio', (req, res) => {
//     const { fullname, email, phone, noc, coininvested,isq } = req.body;

//     // Create a new portfolio detail instance
//     const portfolioDetail = new PortfolioDetail({
//         fullname,
//         email,
//         phone,
//         noc,
//         coininvested,
//         isq
//     });

//     // Save the portfolio detail to the database
//     portfolioDetail.save()
//         .then((savedPortfolio) => {
//             console.log('Portfolio saved:', savedPortfolio);
//             res.json(savedPortfolio);
//         })
//         .catch((err) => {
//             console.error('Error saving portfolio:', err);
//             res.status(500).json({ error: 'Error saving portfolio' });
//         });
// });
const axios = require("axios");



app.post("/portfolio", async (req, res) => {
    const { fullname, email, phone, noc, coininvested, isq } = req.body;

    try {
        // Fetch data from the API
        const response = await axios.get("https://api.coinlore.net/api/tickers/");
        const { data } = response;

        // Find the coin with the matching coininvested
        const coinData = data.data.find(coin => coin.name === coininvested);

        // If the coin is found, calculate the result
        if (coinData) {
            const price_usd = parseFloat(coinData.price_usd);
            const result = isq * price_usd;
            console.log('Result:', result);

        
            const initialInvestment = noc* price_usd;
              // Calculate the total holding
              const totalHolding = initialInvestment + result;
                          // Calculate the profit/loss percent

            const profitLossPercent = ((totalHolding - initialInvestment) / initialInvestment) * 100;

            console.log('Total Holding:', totalHolding);
            console.log('Profit/Loss Percent:', profitLossPercent);

            // Create a new portfolio detail instance
            const portfolioDetail = new PortfolioDetail({
                fullname,
                email,
                phone,
                noc,
                coininvested,
                isq,
                totalHolding,
                profitLossPercent
            });

            // Save the portfolio detail to the database
            const savedPortfolio = await portfolioDetail.save();
            console.log('Portfolio saved:', savedPortfolio);
            res.json({ totalHolding, profitLossPercent, savedPortfolio });
        } else {
            console.error('Coin not found');
            res.status(404).json({ error: 'Coin not found' });
        }
    } catch (error) {
        console.error('Error saving portfolio:', error);
        res.status(500).json({ error: 'Error saving portfolio' });
    }
});

app.get("/portfolio/:email", async (req, res) => {
    const userEmail = req.params.email;

    try {
        // Fetch portfolio data based on the provided email
        const portfolioData = await PortfolioDetail.findOne({ email: userEmail });
        if (!portfolioData) {
            return res.status(404).json({ error: 'Portfolio data not found' });
        }
        
        res.json(portfolioData);
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        res.status(500).json({ error: "Error fetching portfolio data" });
    }
});





mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
      console.log("Connected to Mongo-DB");
    });
  })
  .catch((err) => {
    console.log(err);
  });

 