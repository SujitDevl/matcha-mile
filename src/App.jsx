import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (coffee) => {
    setCart((prevCart) => [...prevCart, coffee]);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* Navbar MUST receive cartCount */}
      <Navbar cartCount={cart.length} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={<Menu addToCart={addToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
