import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

// internal

export const CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
  const TRADING_BOT = "Trading Bot";

  const LOAD_INITIAL_DATA = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // buy
  const buyTokens = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // sell
  const sellTokens = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // trading
  const trading = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CONTEXT.Provider
      value={{
        TRADING_BOT,
        trading,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
