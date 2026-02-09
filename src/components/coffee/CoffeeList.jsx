import React from "react";
import { useState } from "react";
import coffees from "../../data/coffees";
import CoffeeCard from "./CoffeeCard";

function CoffeeList({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCoffees =
    selectedCategory === "all"
      ? coffees
      : coffees.filter((coffee) => coffee.category === selectedCategory);

  function getButtonClass(category) {
    return `px-4 py-2 border rounded-md transition ${
      selectedCategory === category
        ? "bg-amber-900 text-white"
        : "bg-white text-stone-700 hover:bg-stone-100"
    }`;
  }

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={getButtonClass("all")}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("hot")}
          className={getButtonClass("hot")}
        >
          Hot
        </button>

        <button
          onClick={() => setSelectedCategory("cold")}
          className={getButtonClass("cold")}
        >
          Cold
        </button>

        <button
          onClick={() => setSelectedCategory("special")}
          className={getButtonClass("special")}
        >
          Special
        </button>
      </div>

      {/* Coffee Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCoffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            image={coffee.image}
            onAddToCart={() => addToCart(coffee)}
          />
        ))}
      </div>
    </>
  );
}

export default CoffeeList;
