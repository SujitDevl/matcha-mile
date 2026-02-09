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
              <strong className="font-medium text-stone-900">
                MM 🌿 (Matcha Mile)
              </strong>{" "}
              is a modern café experience focused on calm, quality brews, and
              intentional moments.
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

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772"
            alt="Matcha coffee"
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
