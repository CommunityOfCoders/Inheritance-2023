// src/App.js
import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select,
  AppBar,
  Toolbar,
  ButtonGroup,
  TextField,
  Typography,
  Avatar,
  Grid,
} from '@material-ui/core';
import CryptoInfo from './CryptoInfo';


  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',  // Adjust the font size as needed
    marginTop: '20px',  // Add margin for spacing, adjust as needed
  };

const AddTrans = ({ID,parameters}) => {
  const [isAddTransactionOpen, setAddTransactionOpen] = useState(false);
  const [isTransactionDetailsOpen, setTransactionDetailsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedTransactionType, setSelectedTransactionType] = useState('buy');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pricePerCoin, setPricePerCoin] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  

  const handleAddTransactionClick = () => {
    setAddTransactionOpen(true);
  };

  const handleCurrencySelect = (event) => {
    setSelectedCurrency(event.target.value);
    setAddTransactionOpen(false);
    setTransactionDetailsOpen(true);
    // Reset pricePerCoin when currency changes
    setPricePerCoin('');
  };

  const [currentPrice, setCurrentPrice] = useState(null);

  const handleTransactionTypeSelect = (type) => {
    setSelectedTransactionType(type);
    // Reset total value when transaction type changes
    setTotalValue(0);
  };

 
  

  const handleTotalValueChange = () => {
    // Calculate total value based on the selected transaction type
    if (selectedTransactionType === 'buy') {
      setTotalValue(quantity * pricePerCoin);
    } else if (selectedTransactionType === 'sell') {
      // Assuming you have a sellPricePerCoin state, replace it with the actual state variable
      // and adjust the formula accordingly.
      setTotalValue(quantity * sellPricePerCoin);
    }
   
  };

  const handleClose = () => {
    setAddTransactionOpen(false);
    setTransactionDetailsOpen(false);
  };
 
  const currencies = [
    { name: 'Bitcoin', symbol: 'BTC', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png', ID: 90 }, // Update with the correct ID
    { name: 'Ethereum', symbol: 'ETH', image:'https://cdn-icons-png.flaticon.com/128/7016/7016524.png', ID: 80 }, // Update with the correct ID
    { name: 'Tether', symbol: 'USDT', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdt.png', ID: 518 }, // Update with the correct ID
    { name: 'Binance Coin', symbol: 'BNB', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/bnb.png', ID:2710 }, // Update with the correct ID
    { name: 'Solana', symbol: 'SOL', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/sol.png' , ID:48543},
    { name: 'XRP', symbol: 'XRP', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/xrp.png', ID:58 },
    { name: 'USDC', symbol: 'USDC', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/usdc.png',  ID:33285 },
    { name: 'Cardano', symbol: 'ADA', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/ada.png' ,ID:257},
    { name: 'Avalanche', symbol: 'AVAX', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/avax.png', ID:44883 },
    { name: 'DogeCoin', symbol: 'DOGE', image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/doge.png', ID:2 },
  ];
  

  
  useEffect(() => {
    const fetchCryptoInfo = async (symbol) => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/tickers/?symbol=${symbol}`);
        const data = await response.json();
        return data?.data?.[0];
      } catch (error) {
        console.error(`Error fetching crypto info for ${symbol}:`, error);
        return null;
      }
    };

    if (selectedCoin) {
      fetchCryptoInfo(selectedCoin).then((cryptoInfo) => {
        console.log('Crypto Info:', cryptoInfo);
        if (cryptoInfo && cryptoInfo.price_usd) {
          console.log('Price USD:', cryptoInfo.price_usd);
          setCurrentPrice(cryptoInfo.price_usd);
          setPricePerCoin(cryptoInfo.price_usd);
        }
      });
    }
  }, [selectedCoin]);
  

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddTransactionClick} style={buttonStyle} >
       + Add Transaction
      </Button>

      <Dialog open={isAddTransactionOpen} onClose={handleClose}>
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          <div>
            <label>Select Currency:</label>
            <Select
              value={selectedCurrency}
              onChange={handleCurrencySelect}
              variant="outlined"
              fullWidth
              style={{ minWidth: '300px' }}  
            >
              {currencies.map((currency) => (
                <MenuItem key={currency.symbol} value={currency.symbol}>
                  <Grid container alignItems="center" >
                    <Grid item>
                      <Avatar alt={currency.name} src={currency.image} style={{ marginRight: '8px' }} />
                    </Grid>
                    <Grid item>{currency.name} ({currency.symbol})</Grid>
                  </Grid>
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <Typography variant="subtitle2">Available Currencies:</Typography>
            {currencies.map((currency) => (
              <div key={currency.symbol} style={{ marginBottom: '8px' }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Avatar alt={currency.name} src={currency.image} style={{ marginRight: '8px' }} />
                  </Grid>
                  <Grid item>{currency.name} ({currency.symbol})</Grid>
                </Grid>
              </div>
            ))}
           </div>
        </DialogContent>
      </Dialog>

      {/* Transaction Details Dialog */}
      <Dialog open={isTransactionDetailsOpen} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          <AppBar position="static">
            <Toolbar>
              <ButtonGroup color="inherit" aria-label="outlined primary button group">
                <Button onClick={() => handleTransactionTypeSelect('buy')}>Buy</Button>
                <Button onClick={() => handleTransactionTypeSelect('sell')}>Sell</Button>
                <Button onClick={() => handleTransactionTypeSelect('transfer')}>Transfer</Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>

          <div>
            <label>Select Coin:</label>
            <Select value={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
              {currencies.map((currency) => (
                <MenuItem key={currency.symbol} value={currency.symbol}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Avatar alt={currency.name} src={currency.image} style={{ marginRight: '8px' }} />
                    </Grid>
                    <Grid item>{currency.name} ({currency.symbol})</Grid>
                  </Grid>
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} onBlur={handleTotalValueChange} />
            <TextField label="Price per Coin" type="number" value={pricePerCoin} onChange={(e) => {setPricePerCoin(e.target.value); handleTotalValueChange()}}  />
          </div>



          <Typography variant="body2" >Date and Time: {new Date().toLocaleString()}</Typography>
          <Typography variant="body2">{selectedTransactionType === 'sell' ? 'Total Received' : 'Total Expenditure'}: {totalValue}</Typography>
     
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTrans;


 