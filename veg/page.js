import FoodCard from "@/components/FoodCard";

export default function VegPage() {
  const vegItems = [
    {
      name: "Paneer Butter Masala",
      desc: "Creamy tomato gravy with soft paneer.",
      image: "/images/veg1.jpg",
    },
    {
      name: "Veg Biryani",
      desc: "Fragrant basmati rice with mixed vegetables.",
      image: "/images/veg2.jpg",
    },
    {
      name: "Masala Dosa",
      desc: "Crispy dosa stuffed with potato masala.",
      image: "/images/veg3.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Vegetarian Foods</h1>
      <p className="text-gray-700 mb-10">
        Tasty and healthy vegetarian dishes prepared with fresh ingredients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vegItems.map((item, i) => (
          <FoodCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}