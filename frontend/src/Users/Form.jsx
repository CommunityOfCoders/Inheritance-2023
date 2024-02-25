import React, { useState } from "react";
import { useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/index.css";


function Form() {
  
  useEffect(() => {
    setStoredMail(localStorage.getItem("email"));
    if (!storedmail) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/login");
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    noc: "",
    coininvested: "",
    isq: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/portfolio",
        formData
      );
      setSubmitted(true);
      setResult(response.data);
    } catch (error) {
      console.error("Error saving portfolio:", error);
    }
  };

  return (
    <div>
      <Typography variant="h3" sx={{ color: "#00B4D8", marginBottom: "1rem" }}>
        Create a Portfolio
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              variant="filled"
              fullWidth
              required
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            />
          </Grid>
          {" "}
          <Grid item xs={12} sm={6}>
            <TextField
              label="E-mail"
              variant="filled"
              fullWidth
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              variant="filled"
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Your Current Coin Holdings"
              variant="filled"
              fullWidth
              required
              name="noc"
              value={formData.noc}
              onChange={handleChange}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Interested Coin Share Quantity"
              variant="filled"
              fullWidth
              required
              name="isq"
              value={formData.isq}
              onChange={handleChange}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
      <FormControl fullWidth sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
        <InputLabel>Choose the Currency</InputLabel>
        <Select
          name="coininvested"
          value={formData.coininvested}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
                width: '100%',
              },
            },
          }}
        >
          <MenuItem value="Bitcoin" className="mi">Bitcoin</MenuItem>
          <MenuItem value="Ethereum" className="mi">Ethereum</MenuItem>
          <MenuItem value="Tether" className="mi" >Tether</MenuItem>
          <MenuItem value="Binance Coin" className="mi">Binance Coin</MenuItem>
          <MenuItem value="Solana" className="mi">Solana</MenuItem>
          <MenuItem value="XRP" className="mi">XRP</MenuItem>
          <MenuItem value="USDC" className="mi">USDC</MenuItem>
          <MenuItem value="Cardano" className="mi">Cardano</MenuItem>
          <MenuItem value="Avalanche" className="mi">Avalanche</MenuItem>
          <MenuItem value="DogeCoin" className="mi">DogeCoin</MenuItem>
        </Select>
      </FormControl>
    </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: "10px", marginTop: "1rem" }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* Conditionally render PortfolioResult if form is submitted */}

      {result && (
        <div className="card-port">
          <img
            src="/CryptoIntel.png"
            alt="CryptoIntel"
            className="card-image"
          />
          <div className="info-section">
            <h2>Your Portfolio</h2>
            <h2>Total Holding: ${result.totalHolding.toFixed(2)}</h2>
            <h2>Profit/Loss Percent: {result.profitLossPercent.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
