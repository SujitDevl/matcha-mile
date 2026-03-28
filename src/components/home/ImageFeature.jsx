import Container from "../layout/Container";
import React from "react";

function ImageFeature() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80"
            alt="Matcha latte"
            className="rounded-3xl object-cover"
          />

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Crafted With Intention</h2>

            <p className="text-stone-600 mb-4">
              At Matcha Mile, we focus on matcha-forward drinks, slow brewing,
              and clean flavors that feel calm and balanced.
            </p>

            <p className="text-stone-600">
              Every cup is designed to help you pause, breathe, and enjoy the
              moment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImageFeature;
