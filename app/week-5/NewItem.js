"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-md shadow-sm border border-emerald-200 max-w-sm mx-auto space-y-4"
    >
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-md text-slate-800"
        placeholder="Item name"
      />

      <div className="flex gap-3">
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 border rounded-md text-slate-800"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md text-slate-800 capitalize"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700"
      >
        +
      </button>
    </form>
  );
}
