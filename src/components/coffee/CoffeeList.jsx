import { useState } from "react";
import coffees from "../../data/coffees";
import CoffeeCard from "./CoffeeCard";
import React from "react";

function CoffeeList({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "Hot", value: "hot" },
    { label: "Cold", value: "cold" },
    { label: "Special", value: "special" },
  ];

  const filteredCoffees =
    selectedCategory === "all"
      ? coffees
      : coffees.filter(
          (coffee) => coffee.category === selectedCategory
        );

  return (
    <>
      {/* Category Filters */}
      <div className="flex gap-3 mb-14 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                selectedCategory === cat.value
                  ? "bg-emerald-700 text-white"
                  : "bg-white text-stone-600 hover:bg-emerald-100"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Coffee Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
