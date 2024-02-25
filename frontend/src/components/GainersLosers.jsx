import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GainersLosers = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        const response = await axios.get('https://api.coinlore.net/api/tickers/');
        const tickers = response.data.data;

        // Sort tickers by percentage change
        tickers.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));

        // Set top gainers and top losers
        setGainers(tickers.slice(0, 10));
        setLosers(tickers.slice(-10).reverse());
      } catch (error) {
        console.error('Error fetching tickers:', error);
      }
    };

    fetchTickers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mb-8 mx-4">
        <div className="w-1/2 border border-gray-300 rounded-lg p-6">
          <h2 className="text-5xl font-semibold mb-4 text-green-500">Top Gainers</h2>
          <ul>
            {gainers.map((ticker, index) => (
              <li key={index} className="text-gray-800 flex justify-between">
                <span className="text-white text-3xl font-semibold" style={{ fontFamily:  "'Poppins', sans-serif "}}>{ticker.name}</span>
                <span className="text-green-500 text-3xl font-semibold" style={{ fontFamily:  "'Poppins', sans-serif "}}>{ticker.percent_change_24h}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 border border-gray-300 rounded-lg p-6">
          <h2 className="text-5xl font-semibold  mb-4 text-red-500">Top Losers</h2>
          <ul>
            {losers.map((ticker, index) => (
              <li key={index} className="text-gray-800 flex justify-between">
                <span className="text-white text-3xl font-semibold" style={{ fontFamily:  "'Poppins', sans-serif "}} >{ticker.name}</span>
                <span className="text-red-500 text-3xl font-semibold" style={{ fontFamily:  "'Poppins', sans-serif "}}>{ticker.percent_change_24h}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GainersLosers;
