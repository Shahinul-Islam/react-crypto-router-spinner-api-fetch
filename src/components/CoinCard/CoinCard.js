import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { image, name, symbol, id } = coin;
  const path = "/coin-details/" + id;
  return (
    <Link to={path}>
      <div className="flex items-center justify-between h-41 w-41 rounded-xl drop-shadow-lg bg-white p-5">
        <div>
          <img src={image} className="h-16" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-slate-500 font-bold">{name}</h2>
          <p className="text-slate-500 mr-auto">
            <small className="">{symbol}</small>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
