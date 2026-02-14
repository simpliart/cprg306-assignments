import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-emerald-700 text-center">
        Add New Item
      </h1>
      <NewItem />
    </main>
  );
}
