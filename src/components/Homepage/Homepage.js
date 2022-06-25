import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const exploreCoin = () => {
    navigate("/coins");
  };
  return (
    <div className="md:px-16 py-8">
      <div className="flex flex-col justify-center h-[80vh] items-center">
        <h1 className=" font-mono text-xl md:text-5xl">
          Welcome to CRYPTO CAFE <p className="text-6xl mt-4">☕</p>
        </h1>
        <button onClick={exploreCoin} className="py-2 px-3 text-white mt-3 rounded-full bg-cyan-600">
          Explore Coins
        </button>
      </div>
    </div>
  );
};

export default Homepage;
