 import Link from "next/link";

export default function FoodsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Foods</h1>
      <p className="text-gray-700 mb-10">
        Explore our delicious categories of food. Choose Veg or Non-Veg to see menu items with images and descriptions.
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="/foods/veg"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
        >
          Veg Foods
        </Link>

        <Link
          href="/foods/non-veg"
          className="px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
        >
          Non-Veg Foods
        </Link>
      </div>
    </div>
  );
}