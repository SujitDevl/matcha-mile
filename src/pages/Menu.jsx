import Container from "../components/layout/Container";
import CoffeeList from "../components/coffee/CoffeeList";
import React from "react";

function Menu({ addToCart }) {
  return (
    <section className="bg-emerald-50 py-24">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Matcha Mile Menu 🌿
          </h1>
          <p className="text-lg text-stone-600">
            Thoughtfully brewed coffee and matcha drinks —
            crafted for calm moments and mindful living.
          </p>
        </div>

        {/* Coffee List */}
        <CoffeeList addToCart={addToCart} />
      </Container>
    </section>
  );
}

export default Menu;
