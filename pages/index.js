import React from "react";
import { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import toast from "react-hot-toast";

// internal imports
import {
  Footer,
  Header,
  Login,
  Signup,
  Loader,
  Preloader,
  Search,
  SideBar,
  MovingSubmenu,
  useTimeout,
  AddNetwork,
  AddTokenPair,
  Home,
  Networks,
  Price,
  Profile,
  Setting,
  TopExchangeTokens,
  Trading,
  TradeTokens,
} from "../components/index";
import { CONTEXT } from "../context/context";
const index = () => {
  const { TRADING_BOT } = useContext(CONTEXT);
  return (
    <div>
      <MovingSubmenu />
      <Preloader />
    </div>
  );
};

export default index;
