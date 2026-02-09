import Container from "../components/layout/Container";
import { Link } from "react-router-dom";

function Order({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-24 bg-emerald-50">
      <Container>
        <h1 className="text-4xl font-bold mb-10">
          Order Online 🌿
        </h1>

        {cart.length === 0 ? (
          <div>
            <p className="text-stone-600 mb-6">
              Your order is empty. Add some drinks from the menu.
            </p>
            <Link
              to="/menu"
              className="text-emerald-700 font-medium hover:underline"
            >
              Go to Menu →
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Order Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-stone-600 text-sm">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
              <h2 className="text-xl font-semibold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-6 text-stone-700">
                <span>Total</span>
                <span className="font-semibold text-emerald-700">
                  ₹{total}
                </span>
              </div>

              <button
                onClick={() => {
                  alert("Order placed successfully 🌿");
                  clearCart();
                }}
                className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Order;
