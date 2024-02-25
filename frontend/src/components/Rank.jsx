import React, { useState, useEffect } from 'react';

const Rank = ({ currencyId }) => {
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${currencyId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch rank for currency with ID ${currencyId}`);
        }
        const data = await response.json();
        if (!data || data.length === 0 || !data[0].rank) {
          throw new Error(`No rank found for currency with ID ${currencyId}`);
        }
        setRank(data[0].rank);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRank();
  }, [currencyId]);

  if (loading) {
    return <div>Loading rank...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Rank: {rank}</div>;
};

export default Rank;
