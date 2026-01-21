import React from "react";
import coffees from "../../data/coffees";
import CoffeeCard from "./CoffeeCard";

function CoffeeList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          name={coffee.name}
          description={coffee.description}
          price={coffee.price}
        />
      ))}
    </div>
  );
}

export default CoffeeList;
