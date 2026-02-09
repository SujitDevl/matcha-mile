import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import React from "react";

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative transition-colors duration-300 ${
      isActive ? "text-emerald-700" : "text-stone-700 hover:text-emerald-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-semibold italic tracking-wide text-emerald-700 group-hover:scale-105 transition-transform">
              MM
            </span>
            <span className="text-xl">🌿</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/menu" className={navLinkClass}>
              Menu
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {/* Order Online CTA */}
            <Link
              to="/order"
              className="ml-4 inline-flex items-center gap-2 bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 hover:shadow-md hover:-translate-y-[1px] transition-all duration-300"
            >
              Order Online
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {cartCount}
              </span>
            </Link>
          </nav>

          {/* Mobile Right */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/order"
              className="bg-emerald-700 text-white px-3 py-1.5 rounded-full text-sm font-medium"
            >
              {cartCount}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-stone-700"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 flex flex-col gap-4 animate-fadeIn">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>

            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex justify-center bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium"
            >
              Order Online ({cartCount})
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
