import Container from "../layout/Container";
import React from "react";

function ImageFeature() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Cafe interior"
            className="rounded-3xl object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">Crafted With Intention</h2>

            <p className="text-stone-600 mb-4">
              At Matcha Mile, every cup is brewed slowly, thoughtfully, and
              sustainably — because coffee should feel good, not rushed.
            </p>

            <p className="text-stone-600">
              We blend modern café culture with mindful living, creating a calm
              space for focus and connection.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImageFeature;
