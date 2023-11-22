import React, { useState } from "react";
import {Link} from 'react-router-dom'
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
        <li onClick={() => {setMenu("Shop")}}><Link to="/">Shop</Link> {menu === "Shop" ? <hr/> : <></>} </li>
        <li onClick={() => {setMenu("mens")}}><Link to="/mens">Men</Link> {menu === "mens" ? <hr/>  : <></>}</li>
        <li onClick={() => {setMenu("womans")}}><Link to="/womans">Woman</Link> {menu === "womans" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link to="/kids">Kids</Link> {menu === "kids" ? <hr/>  : <></>}</li>
      </ui>
      <div className="nav-login-cart">
        <Link to="/login"><Button variant="contained">Login</Button></Link>
        <Link to="/cart"><img src={cart_icon} alt="logo"></img></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
