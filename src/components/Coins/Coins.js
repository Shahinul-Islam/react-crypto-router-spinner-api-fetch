import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setLoading(false);
  }, []);
  //   console.log(coins);
  return (
    <div className="bg-slate-200 p-5">
      {/* {coins ? coins : `${(<Spinner></Spinner>)}`} */}
      <h2 className="text-3xl font-bold text-slate-500 py-2">Available Crypto Currencies</h2>
      <p className="mb-5 text-slate-500 text-lg">Total Coins: {coins.length}</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">{loading === true ? <Spinner></Spinner> : coins.map((coin) => <CoinCard key={coin.id} coin={coin}></CoinCard>)}</div>
    </div>
  );
};

export default Coins;
