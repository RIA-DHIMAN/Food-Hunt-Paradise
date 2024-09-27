import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthNavbar from "./Components/AuthNavbar";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Forms/login";
import Register from "./Forms/Register";
import Pizzainfo from "./Pages/Pizzainfo";
import View from "./Innerpages/View";
import AddToCart from "./Pages/Addcart";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    alert("Item added to your Favourites");
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <BrowserRouter>
      {token ? <AuthNavbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />

        {token ? (
          <>
            <Route path="/view/:id" element={<View />} />
            <Route
              path="/pizzainfo"
              element={<Pizzainfo addToCart={addToCart} />}
            />
            <Route
              path="/addcart"
              element={
                <AddToCart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
