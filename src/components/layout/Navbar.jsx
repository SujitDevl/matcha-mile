import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <Container>
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wide text-emerald-700">
              MM
            </span>
            <span className="text-xl">🌿</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-stone-700 font-medium">
            <Link to="/" className="hover:text-amber-900">
              Home
            </Link>
            <Link to="/menu" className="hover:text-amber-900">
              Menu
            </Link>
            <Link to="/about" className="hover:text-amber-900">
              About
            </Link>
            <Link to="/contact" className="hover:text-amber-900">
              Contact
            </Link>

            {/* Cart */}
            <span className="ml-4 text-sm font-semibold">
              Cart ({cartCount})
            </span>
          </nav>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-4">
            <span className="text-sm font-semibold">Cart ({cartCount})</span>

            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              ☰
            </button>
          </div>
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
