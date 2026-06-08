// Import react state hooks and react router routes
import React from 'react';
import { useState } from 'react';
import { BrowseRouter, Routes, Route } from 'react-router-dom'; //Handles page naviation
import Navbar from "./components/Navbar"; //Will be seen on every page
//Page components to be linked to App
import LandingPage from './pages/LandingPage'; 
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter> {/*This wraps the app and enables client-side routing*/}
    <Navbar/> {/*will be shown on every page*/}
    <Routes> {/*Holds all the routes to be rendered*/}
      <Route path="/" element={<LandingPage />}/>
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/add-product" element={<AddProductPage />}/>
      <Route path="/products/:id" element={<ProductDetailPage />}/>
      </Routes>
      </BrowserRouter>
  );
};

export default App;