import React from 'react';
import CryptoInfo from './CryptoInfo';
import { useParams } from 'react-router-dom';
import './index.css';
import './CryptoDetailsPage.css';
import HistoryCards from './components/HistoryCards';


const CryptoDetailsPage = () => {
  const { id } = useParams();
  const cryptoID = id;

  const cryptoInfoParameters = [
    'name',
    'symbol',
    'price_usd',
    'market_cap_usd',
    'percent_change_1h',
    'percent_change_24h',
    'percent_change_7d',
    'volume24',
    'volume24a',
    'csupply',
    'tsupply',
    'msupply',
  ];

  const idMappings = {
    '90': 'bitcoin',
    '80': 'ethereum',
    '518': 'tether',
    '2710': 'binancecoin',
    '48543': 'solana',
    '33285': 'usd-coin',
    '257': 'cardano',
    '44883': 'avalanche-2',
    '2': 'dogecoin',
    '58': 'ripple',
    'default': 'default'
  };

  const historyChartID = idMappings[cryptoID] || idMappings['default'];

  return (
    <div className="crypto-details-container">
      <div className="crypto-info-container">
        <CryptoInfo ID={cryptoID} parameters={cryptoInfoParameters} />
      </div>
      <div className="history-chart-container">
        {historyChartID !== 'default' ? (
          <HistoryCards id={historyChartID} />
        ) : (
          <p>No history chart available for this cryptocurrency</p>
        )}
      </div>
    </div>
  );
};

export default CryptoDetailsPage;
