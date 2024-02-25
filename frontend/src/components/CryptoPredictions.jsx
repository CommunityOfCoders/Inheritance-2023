// // CryptoPrice.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CryptoPrice({ currency }) {
//   const [price, setPrice] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('/');
//         const data = response.data;
//         // Extract price for the specified currency
//         const currencyPrice = data[`${currency}_pred_val`];
//         setPrice(currencyPrice);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, [currency]);

//   return (
//     <div>
//       <h2>{currency} Price Prediction</h2>
//       {price !== null ? (
//         <p>{currency}: {price}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default CryptoPrice;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPredictions = () => {
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/crypto_predict');
        setTimeout(() => {
          setPredictions(response.data);
          console.log(response.data)
          setLoading(false);
        }); 
      
      } catch (error) {
        console.error('Error fetching predictions:', error);
        setLoading(false);
      }
    
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
    <h2 className="text-5xl font-semibold mb-4">CRYPTOCURRENCY PREDICTIONS</h2>
    <ul className="grid grid-cols-2 gap-4">
      <li className='cp_table flex items-center'> {/* Increase font size for li elements */}
        <span className="flex items-center"> {/* Align items vertically */}
          <img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png" className="w-10 h-10 mr-2" /> {/* Adjust width and height */}
          <span className="cp_text">BTC:  </span>
        
        </span>
<span className='text-4xl ml-11'>
        ${predictions && predictions.btc_pred_val.toFixed(2)}
        </span>
      </li>
        <li className="cp_table flex items-center">
          <span className="flex item center"><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/bnb.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">BNB:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.bnb_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
          <span><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/avax.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">Avalanche:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.avalanche_pred_val.toFixed(2)}
</span>

        </li>
        <li className="cp_table flex items-center">
          <span><img src="public/cardano.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">Cardano:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.cardano_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
          <span><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chainlink-link-icon.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">Chainlink: </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.chainlink_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
        <span><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/doge.png" className="w-10 h-10 mr-2" /></span>
          <span className="cp_text">Doge: </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.doge_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
          <span><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">ETH:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.eth_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
          <span><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/sol.png" className="w-10 h-10 mr-2"  /></span>
          <span className="cp_text">Solana:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.sol_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
          <span><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdt.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">Tether:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.tether_pred_val.toFixed(2)}
</span>
        </li>
        <li className="cp_table flex items-center">
          <span><img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/xrp.png" className="w-10 h-10 mr-2"/></span>
          <span className="cp_text">XRP:  </span> 
          <span className='text-4xl ml-11'>
${predictions && predictions.xrp_pred_val.toFixed(2)}
</span>
        </li>
      </ul>
    </div>
  );
};

export default CryptoPredictions;