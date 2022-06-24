import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
// import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Coins from "./components/Coins/Coins";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import Contact from "./components/Contact/Contact";
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

// currency api:https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false
// currency with id api:https://api.coingecko.com/api/v3/coins/bitcoin

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="coins" element={<Coins></Coins>}></Route>
        <Route path="coin-details/:coinId" element={<CoinDetails></CoinDetails>} />
        <Route path="contact" element={<Contact></Contact>}>
          <Route path="bd-address" element={<BdAddress></BdAddress>}></Route>
          <Route path="us-address" element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
