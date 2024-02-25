//color schemes version
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)`
  && {
    display: inline-block;
    padding: 8px 12px;
    margin: 4px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'IBM Plex Serif', serif;
  }

  &.green {
    background-color: green;
    color: white;
    height:50px;
    width:500px;
  }

  &.red {
    background-color: red;
    color: white;
    height:50px;
    width:500px;
  }

  &.blue {
    background-color: blue;
    color: white;
    height:50px;
    width:500px;
  }
`;

const CryptoInfo = ({ ID, parameters }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${ID}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for cryptocurrency with ID ${ID}`);
        }
        const data = await response.json();
        if (data.length === 0) {
          throw new Error(`No data found for cryptocurrency with ID ${ID}`);
        }

        const cryptoParameters = {};
        parameters.forEach(param => {
          if (data[0][param]) {
            cryptoParameters[param] = data[0][param];
          }
        });

        setCryptoData(cryptoParameters);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCryptoData();

    const timeout = setTimeout(() => {
      window.location.reload();
    }, 5000);
   
    return () => clearTimeout(timeout);

  }, [ID, parameters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;

`;
  return (
    <Container>
    <div>
      <Typography variant="h4" className="cryptoinfoHead">
        {cryptoData.name} ({cryptoData.symbol})
      </Typography>
      {cryptoData.rank && (
        
          <StyledTypography className={cryptoData.percent_change_1h > 0 ? 'green' : cryptoData.percent_change_1h < 0 ? 'red' : 'blue'}>
            Rank: {cryptoData.rank}
          </StyledTypography>
      
      )}
      {cryptoData.market_cap_usd && (
        <div>
          <StyledTypography className={cryptoData.percent_change_24h > 0 ? 'green' : cryptoData.percent_change_24h < 0 ? 'red' : 'blue'}>
            Market Cap (USD): {cryptoData.market_cap_usd}
          </StyledTypography>
        </div>
      )}
      {cryptoData.price_usd && (
        <div>
          <StyledTypography className={cryptoData.percent_change_7d > 0 ? 'green' : cryptoData.percent_change_7d < 0 ? 'red' : 'blue'}>
            Price (USD): {cryptoData.price_usd}
          </StyledTypography>
        </div>
      )}
      {cryptoData.percent_change_1h && (
        <div>
          <StyledTypography className={cryptoData.percent_change_1h > 0 ? 'green' : cryptoData.percent_change_1h < 0 ? 'red' : 'blue'}>
            Percent Change (1h): {cryptoData.percent_change_1h}%
          </StyledTypography>
        </div>
      )}
      {cryptoData.percent_change_24h && (
        <div>
          <StyledTypography className={cryptoData.percent_change_24h > 0 ? 'green' : cryptoData.percent_change_24h < 0 ? 'red' : 'blue'}>
            Percent Change (24h): {cryptoData.percent_change_24h}%
          </StyledTypography>
        </div>
      )}
      {cryptoData.percent_change_7d && (
        <div>
          <StyledTypography className={cryptoData.percent_change_7d > 0 ? 'green' : cryptoData.percent_change_7d < 0 ? 'red' : 'blue'}>
            Percent Change (7d): {cryptoData.percent_change_7d}%
          </StyledTypography>
        </div>
      )}
      {cryptoData.volume24 && (
        <div>
          <StyledTypography className={cryptoData.percent_change_24h > 0 ? 'green' : cryptoData.percent_change_24h < 0 ? 'red' : 'blue'}>
            Volume (24h): {cryptoData.volume24}
          </StyledTypography>
        </div>
      )}
      {cryptoData.csupply && (
        <div>
          <StyledTypography className={cryptoData.csupply > 0 ? 'green' : 'blue'}>
            Circulating Supply: {cryptoData.csupply}
          </StyledTypography>
        </div>
      )}
      {cryptoData.tsupply && (
        <div>
          <StyledTypography className={cryptoData.tsupply > 0 ? 'green' : 'blue'}>
            Total Supply: {cryptoData.tsupply}
          </StyledTypography>
        </div>
      )}
      {cryptoData.msupply && (
        <div>
          <StyledTypography className={cryptoData.msupply > 0 ? 'green' : 'blue'}>
            Maximum Supply: {cryptoData.msupply}
          </StyledTypography>
        </div>
      )}
      <div>
    </div>
 
   </div>

    </Container>
    
  );
};

export default CryptoInfo;
