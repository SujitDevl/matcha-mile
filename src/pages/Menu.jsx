import React from "react";
import Container from "../components/layout/Container";
import CoffeeList from "../components/coffee/CoffeeList";

function Menu() {
  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-4">Our Coffee Menu ☕</h1>

        <p className="text-stone-600 mb-10 max-w-2xl">
          Carefully crafted beverages made from premium coffee beans.
        </p>

        <CoffeeList />
      </Container>
    </section>
  );
}

export default Menu;
