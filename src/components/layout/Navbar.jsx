import { useState } from "react";
import Container from "./Container";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-amber-900">
            Cafe Grind
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-stone-700 font-medium">
            <a href="#" className="hover:text-amber-900 transition">
              Home
            </a>
            <a href="#" className="hover:text-amber-900 transition">
              Menu
            </a>
            <a href="#" className="hover:text-amber-900 transition">
              About
            </a>
            <a href="#" className="hover:text-amber-900 transition">
              Contact
            </a>
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
            <a href="#" className="hover:text-amber-900">
              Home
            </a>
            <a href="#" className="hover:text-amber-900">
              Menu
            </a>
            <a href="#" className="hover:text-amber-900">
              About
            </a>
            <a href="#" className="hover:text-amber-900">
              Contact
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
