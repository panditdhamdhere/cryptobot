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

  // state variables
  const [activeComponent, setActiveComponent] = useState("Signup");
  const [membershipType, setMembershipType] = useState("premium");
  const [authBackEndID, setAuthBackEndID] = useState("");
  const [networks, setNetworks] = useState({});
  const [networkName, setNetworkName] = useState();

  // notification
  const notifyError = (message) => toast.error(message, { duration: 3000 });
  const notifySuccess = (message) => toast.success(message, { duration: 3000 });

  return (
    <div>
      <MovingSubmenu />
      {/* <Preloader /> */}
      {
        activeComponent == "Signup" ? (
          <Signup axios={axios} setActiveComponent={setActiveComponent} 
          notifyError={notifyError}
          notifySuccess={notifySuccess}
          />
        ) : (
          "HOME"
        )
      }
    </div>
  );
};

export default index;
