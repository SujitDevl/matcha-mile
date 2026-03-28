import Container from "../layout/Container";
import React from "react";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521495037286-6c7b89b3c0c3?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-6">
          Inside Matcha Mile
        </h2>

        <p className="text-stone-600 text-center mb-12 max-w-xl mx-auto">
          A visual taste of our matcha-forward drinks and slow coffee culture.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Coffee drink"
              className="h-80 w-full rounded-3xl object-cover hover:scale-[1.02] transition"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
