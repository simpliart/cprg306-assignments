import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-emerald-700">
        Shopping List
      </h1>
      <GroceryItemList />
    </main>
  );
}
