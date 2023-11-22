import React, { useState } from "react";
// import { GlobalContext } from '../ContextApis/Context';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import Button from "@mui/material/Button";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  // let { state, dispatch } = useContext(GlobalContext);
  const [menu, setMenu] = useState("");

  return (
    <div className="navigation">
      <nav className="nav-logo">
        <img src={logo} alt="navLogo"></img>
        <p>SHOPPING</p>
      </nav>
      <ui className="nav-menu">
        <li onClick={() => {setMenu("Shop")}}>Shop {menu === "Shop" ? <hr/> : <></>} </li>
        <li onClick={() => {setMenu("mens")}}>Men {menu === "mens" ? <hr/>  : <></>}</li>
        <li onClick={() => {setMenu("womans")}}>Woman {menu === "womans" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}>Kids {menu === "kids" ? <hr/>  : <></>}</li>
      </ui>
      <div className="nav-login-cart">
        <Button variant="contained">Login</Button>
        <img src={cart_icon} type="cart_icon"></img>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
