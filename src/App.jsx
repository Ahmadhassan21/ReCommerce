import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "./Redux/ProducSlice";
import SingleProductpage from "./Pages/SingleProductpage";
import Loader from "./Components/Loader";
import CartPage from "./Pages/CartPage";
const IndexPage = () => {

const dispatch = useDispatch();
const [loading,setLoading] = useState(true)
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data; 
      dispatch(addProducts(data))
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);
   if(loading){
    return<div className="min-h-screen flex items-center justify-center">
      <Loader/>
    </div>
   }


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductpage/>}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default IndexPage;
