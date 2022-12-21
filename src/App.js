import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Store from "./Components/Store"
import {Provider} from "react-redux"


function App() {
  return (
    <>
    
 <Provider store={Store}>

    <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
   
    </Provider>
    </>
  );
}

export default App;