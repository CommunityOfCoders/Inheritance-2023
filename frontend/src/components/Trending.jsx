import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import CoinTrending from './CoinTrending';
import Skeleton from './Skeleton';

const Trending = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { response, loading } = useAxios('search/trending');

  const coinsPerPage = 15;
  const totalPages = Math.ceil(response?.coins.length / coinsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-8 w-full mt-2" />
        ))}
      </div>
    );
  }

  const startIndex = currentPage * coinsPerPage;
  const endIndex = (currentPage + 1) * coinsPerPage;

  const firstThirdCoins = response?.coins.slice(startIndex, startIndex + Math.ceil(coinsPerPage / 3));
  const secondThirdCoins = response?.coins.slice(startIndex + Math.ceil(coinsPerPage / 3), startIndex + Math.ceil((2 * coinsPerPage) / 3));
  const thirdThirdCoins = response?.coins.slice(startIndex + Math.ceil((2 * coinsPerPage) / 3), endIndex);

  const handleClick = (coinId) => {
    // Handle click for the remaining coins
    console.log(`Clicked on coin with ID ${coinId}`);
  };

  return (
    <div className="mt-2 text-white">
      <h1 className="text-7xl mb-2 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Trending</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-3xl font-semibold  ">
          {firstThirdCoins && firstThirdCoins.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin.item} onClick={() => handleClick(coin.item.coin_id)} />
          ))}
        </div>
        <div className="text-3xl font-semibold ">
          {secondThirdCoins && secondThirdCoins.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin.item} onClick={() => handleClick(coin.item.coin_id)} />
          ))}
        </div>
        <div className="text-3xl font-semibold  ">
          {thirdThirdCoins && thirdThirdCoins.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin.item} onClick={() => handleClick(coin.item.coin_id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
