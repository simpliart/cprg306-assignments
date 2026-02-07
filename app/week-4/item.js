export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-md p-4 shadow-sm bg-white mb-3">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <p className="text-gray-500 text-sm">Category: {category}</p>
    </li>
  );
}
