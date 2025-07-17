import React from "react";
import { Link } from "react-router-dom";

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  image: `https://via.placeholder.com/300x400?text=Product+${i + 1}`,
  price: (Math.random() * 100 + 20).toFixed(2),
}));

export default function HomePage() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-blue-700 font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}