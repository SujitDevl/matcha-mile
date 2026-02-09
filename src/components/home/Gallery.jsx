import Container from "../layout/Container";
import React from "react";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-6">
          Inside Matcha Mile
        </h2>

        <p className="text-stone-600 text-center mb-12 max-w-xl mx-auto">
          A calm space designed for slow mornings, deep focus, and meaningful
          conversations.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Cafe lifestyle"
              className="h-80 w-full rounded-3xl object-cover hover:scale-[1.02] transition"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
