import React from "react";

function CoffeeCard({ name, description, price }) {
  return (
    <div className="rounded-lg border border-stone-200 p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-stone-900">{name}</h3>

      <p className="mt-2 text-stone-600 text-sm">{description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-amber-900">₹{price}</span>

        <button className="text-sm font-medium text-amber-900 hover:underline">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
