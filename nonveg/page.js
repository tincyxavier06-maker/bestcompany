import FoodCard from "@/components/FoodCard";

export default function NonVegPage() {
  const nonVegItems = [
    {
      name: "Chicken Biryani",
      desc: "Hyderabadi-style biryani with tender chicken.",
      image: "/images/nonveg1.jpg",
    },
    {
      name: "Fish Curry",
      desc: "Traditional coastal curry with coconut and spices.",
      image: "/images/nonveg2.jpg",
    },
    {
      name: "Mutton Pepper Fry",
      desc: "Bold and spicy mutton cooked with black pepper.",
      image: "/images/nonveg3.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Non-Vegetarian Foods</h1>
      <p className="text-gray-700 mb-10">
        Enjoy flavorful non-veg dishes cooked with authentic spices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nonVegItems.map((item, i) => (
          <FoodCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}