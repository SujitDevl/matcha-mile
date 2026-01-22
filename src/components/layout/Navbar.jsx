import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-amber-900">Cafe Grind</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-stone-700 font-medium">
            <Link to="/" className="hover:text-amber-900 transition">
              Home
            </Link>
            <Link to="/menu" className="hover:text-amber-900 transition">
              Menu
            </Link>
            <Link to="/about" className="hover:text-amber-900 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-amber-900 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-stone-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-stone-700">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
