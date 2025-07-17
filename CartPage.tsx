import React from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <p className="text-gray-600 mb-4">Cart functionality placeholder.</p>
      <Link to="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
        Proceed to Checkout
      </Link>
    </div>
  );
}