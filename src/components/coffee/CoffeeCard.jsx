import React from "react";

function CoffeeCard({ name, description, price, image, onAddToCart }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <img src={image} alt={name} className="h-60 w-full object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>

        <p className="text-stone-600 text-sm mb-4">{description}</p>

        <div className="flex items-center justify-between">
          {/* Price Badge */}
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
            ₹{price}
          </span>

          {/* Add to Cart Button */}
          <button
            onClick={onAddToCart}
            className="bg-emerald-700 text-white text-sm px-4 py-2 rounded-full hover:bg-emerald-600 transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
