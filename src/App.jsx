import Container from "./components/layout/Container";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
