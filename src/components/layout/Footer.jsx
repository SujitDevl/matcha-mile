import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-16">
      <Container>
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xl font-bold tracking-wide text-emerald-700">
                MM
              </span>
              <span>🌿</span>
            </div>

            <p className="text-stone-600 text-sm mt-2">
              Matcha Mile — slow coffee, mindful moments.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-stone-500 pb-6">
          © {new Date().getFullYear()} Matcha Mile. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
