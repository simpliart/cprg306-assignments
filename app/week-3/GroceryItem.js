export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 mb-2 border rounded-md bg-white shadow-sm flex justify-between items-center border-emerald-200">
      <div>
        <p className="font-medium text-slate-800">{name}</p>
        <p className="text-sm text-emerald-600 capitalize">{category}</p>
      </div>

      <span className="text-sm px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md">
        {quantity}
      </span>
    </li>
  );
}
