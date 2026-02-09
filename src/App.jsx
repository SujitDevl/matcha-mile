import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

function App() {
  // Global order state
  const [cart, setCart] = useState([]);

  // Add drink to order
  const addToCart = (coffee) => {
    setCart((prevCart) => [...prevCart, coffee]);
  };

  // Remove drink by index
  const removeFromCart = (index) => {
    setCart((prevCart) =>
      prevCart.filter((_, i) => i !== index)
    );
  };

  // Clear entire order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-stone-900 flex flex-col">
      {/* Top Navigation */}
      <Navbar cartCount={cart.length} />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/menu"
            element={<Menu addToCart={addToCart} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/order"
            element={
              <Order
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
