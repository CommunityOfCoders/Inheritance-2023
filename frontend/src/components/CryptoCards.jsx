// CryptoCards.jsx
import React from "react";

import { Link } from "react-router-dom";
import Card from "./Card";
import Rank from "./Rank";

const commonParameters = [
  "name",
  "symbol",
  "rank",
  "price_usd",
  "market_cap_usd",
  "percent_change_1h",
  "percent_change_24h",
  "percent_change_7d",
  "volume24",
  "volume24a",
  "csupply",
  "tsupply",
  "msupply",
];

const BitcoinCard = () => {
  const parameters = commonParameters;

  return (
    <Card
      title="Bitcoin"
      job={<Rank currencyId="90" />}
      // Link to the details page for Bitcoin
      buttonText={<Link  to="/crypto/90" className="text-black">Click Me</Link>}
      ID="90"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png"
    />
  );
};

const EthereumCard = () => {
  const parameters = commonParameters;

  return (
    <Card
      title="Ethereum"
      job={<Rank currencyId="80" />}
      buttonText={<Link to="/crypto/80" className="text-black">Click Me</Link>}
      ID="80"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
    />
  );
};

const TetherCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="Tether"
      job={<Rank currencyId="518" />}
      buttonText={<Link to="/crypto/518" className="text-black">Click Me</Link>}
      ID="518"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdt.png"
    />
  );
};

const BNBCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="Binance Coin"
      job={<Rank currencyId="2710" />}
      buttonText={<Link to="/crypto/2710" className="text-black">Click Me</Link>}
      ID="2710"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/bnb.png"
    />
  );
};

const SolanaCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="Solana"
      job={<Rank currencyId="48543" />}
      buttonText={<Link to="/crypto/48543" className="text-black">Click Me</Link>}
      ID="48543"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/sol.png"
    />
  );
};

const XRPCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="XRP"
      job={<Rank currencyId="58" />}
      buttonText={<Link to="/crypto/58" className="text-black">Click Me</Link>}
      ID="58"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/xrp.png"
    />
  );
};

const USDCCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="USDC Coin"
      job={<Rank currencyId="33285" />}
      buttonText={<Link to="/crypto/33285" className="text-black">Click Me</Link>}
      ID="33285"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/usdc.png"
    />
  );
};

const CardanoCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="Cardano"
      job={<Rank currencyId="257" />}
      buttonText={<Link to="/crypto/257" className="text-black">Click Me</Link>}
      ID="257"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/ada.png"
    />
  );
};

const AvalanceCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="Avalanche"
      job={<Rank currencyId="44883" />}
      buttonText={<Link to="/crypto/44883" className="text-black">Click Me</Link>}
      ID="44883"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/avax.png"
    />
  );
};

const DogeCoinCard = () => {
  const parameters = commonParameters;
  return (
    <Card
      title="DogeCoin"
      job={<Rank currencyId="2" />}
      buttonText={<Link to="/crypto/2" className="text-black">Click Me</Link>}
      ID="2"
      parameters={parameters}
      image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/doge.png"
    />
  );
};

export {
  BitcoinCard,
  EthereumCard,
  TetherCard,
  BNBCard,
  SolanaCard,
  XRPCard,
  USDCCard,
  CardanoCard,
  AvalanceCard,
  DogeCoinCard,
};
