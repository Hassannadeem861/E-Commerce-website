import './App.css';
// import Navbar from './Components/Navbar'
// import ProductCard from './Components/ProductCard'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import NotFound from './Components/Pages/NotFound'
import Products from './Components/Pages/Products'
import SingleProduct from './Components/Pages/SingleProduct'



function App() {
  return (
    <>

     <BrowserRouter>
     
       <Routes>
           <Route path='/' element={<Home/>}>Home</Route>
           <Route path='/About' element={<About/>}>Home</Route>
           <Route path='/Contact' element={<Contact/>}>Home</Route>
           <Route path='/Products' element={<Products/>}>Home</Route>
           <Route path='/SingleProduct' element={<SingleProduct/>}>Home</Route>
           <Route path='*' element={<NotFound/>}>Home</Route>
       </Routes>

     </BrowserRouter>




    </>
  );
}

export default App;
