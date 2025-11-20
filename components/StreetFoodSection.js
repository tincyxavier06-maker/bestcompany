export default function StreetFoodSection() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white shadow-lg p-6 rounded-xl">

        {/* Image */}
        <img
          src="/images/street-food.jpg"
          alt="Street Food"
          className="w-full h-60 object-cover rounded-xl"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Famous Street Food</h2>

          <p className="text-gray-700 mb-4">
            India’s street food is known for its bold flavors and unique cooking styles.
          </p>

          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Freshly prepared with traditional ingredients</li>
            <li>Unique taste from region to region</li>
            <li>Affordable and widely available</li>
            <li>Includes snacks, sweets, beverages & more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}