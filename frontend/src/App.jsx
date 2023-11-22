import "./App.css";
// import Button from "@mui/material/Button";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from './Pages/Shop/Shop'
import ShopCatagery from './Pages/ShopCatagery/ShopCetagery'
import PageNotFound from './Pages/404PageNotFound/PageNotfound'
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Product from './Pages/Product/Product'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCatagery category="mens"/>}/>
          <Route path="/womans" element={<ShopCatagery category="womans"/>}/>
          <Route path="/kids" element={<ShopCatagery category="kids"/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path=":productId" element={<Product/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>

      </BrowserRouter>
                       
    </div>
  );
}

export default App;
