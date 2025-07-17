import React from "react";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input type="text" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block font-semibold">Address</label>
          <textarea className="w-full border rounded p-2" required></textarea>
        </div>
        <div>
          <label className="block font-semibold">City</label>
          <input type="text" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block font-semibold">Pincode</label>
          <input type="text" className="w-full border rounded p-2" required />
        </div>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
}