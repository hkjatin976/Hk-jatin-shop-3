import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={`https://via.placeholder.com/600x800?text=Product+${id}`} alt={`Product ${id}`} className="w-full object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-2">Product {id}</h1>
          <p className="text-gray-700 mb-4">High-quality fashion clothing item. Placeholder description.</p>
          <p className="text-xl text-blue-700 font-bold mb-4">₹{(Math.random() * 100 + 20).toFixed(2)}</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mr-4"
            onClick={() => navigate("/cart")}
          >
            Add to Cart
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            onClick={() => navigate("/checkout")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}