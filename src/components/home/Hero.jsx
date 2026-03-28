import Container from "../layout/Container";
import { Link } from "react-router-dom";
import React from "react";

function Hero() {
  return (
    <section className="bg-emerald-50 py-28">
      <Container>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-stone-900">
              Slow Coffee for
              <span className="text-emerald-700"> Mindful Living</span>
            </h1>

            <p className="mt-6 text-lg text-stone-600 max-w-xl">
              <strong>MM 🌿 (Matcha Mile)</strong> is a modern café brand
              focused on clean ingredients, matcha based drinks, and intentional
              coffee moments.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/menu"
                className="bg-emerald-700 text-white px-7 py-3 rounded-lg hover:bg-emerald-600 transition"
              >
                Explore Menu
              </Link>

              <Link
                to="/about"
                className="border border-emerald-700 text-emerald-700 px-7 py-3 rounded-lg hover:bg-emerald-100 transition"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* HERO IMAGE – IMPRESSIVE */}
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
            alt="Fresh brewed coffee"
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
