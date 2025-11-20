import Image from "next/image";

export default function FoodCard({ name, desc, image }) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}