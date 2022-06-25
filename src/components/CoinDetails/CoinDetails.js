import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  let params = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));

    setLoading(true);
  }, [params.coinId]);
  // console.log(coin);
  return (
    <div>
      {loading == false ? (
        <Spinner></Spinner>
      ) : (
        <div className="md:flex md:justify-between lg:justify-around p-10 bg-slate-200">
          <div className="text-left ml-10 mb-6">
            <h2 className="text-2xl">General Info:</h2>
            <p>Coin Name:{coin.name}</p>
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
            <p>Origin: {coin.country_origin == "" ? "Not Available" : `${coin.country_origin}`}</p>
            <p>Contract Address:</p>
            <p>Hashing Algorithm: {coin.hashing_algorithm == null ? "Not Available" : `${coin.hashing_algorithm}`}</p>
            <p>Genesis Date: {coin.genesis_date}</p>
            <p>Last Updated: {coin.last_updated}</p>
            <br />
            <h2 className="text-2xl">Scores:</h2>
            <p>Community Score: {coin.community_score}</p>
            <p>Developer Score: {coin.developer_score}</p>
            <p>Liquidity Score: {coin.liquidity_score}</p>
            <p>Public Interest Score: {coin.public_interest_score}</p>
          </div>
          <div className="mr-10 md:my-auto mx-auto">
            <img src={coin?.image?.large} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
