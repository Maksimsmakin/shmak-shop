
import { useState } from "react";
import { Button } from "@/components/ui/button";
import categoriesData from "@/data/categories";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (sub) => setSelectedSubCategory(sub);

  const products =
    selectedCategory && selectedSubCategory
      ? categoriesData
          .find((cat) => cat.name === selectedCategory)
          ?.subcategories.find((sub) => sub.name === selectedSubCategory)
          ?.products || []
      : [];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2 text-rose-700">ШмаК</h1>
      <p className="text-gray-500 mb-6">І все готово</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {categoriesData.map((cat) => (
          <Button key={cat.name} onClick={() => handleCategoryClick(cat.name)}>
            {cat.name}
          </Button>
        ))}
      </div>

      {selectedCategory && (
        <div className="flex flex-wrap gap-2 mb-4">
          {categoriesData
            .find((cat) => cat.name === selectedCategory)
            ?.subcategories.map((sub) => (
              <Button key={sub.name} onClick={() => handleSubCategoryClick(sub.name)}>
                {sub.name}
              </Button>
            ))}
        </div>
      )}

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-3 w-full h-48 object-cover"
            />
            <h2 className="font-semibold text-lg text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-rose-600 font-bold text-lg">₴{product.price}</span>
              <Button size="sm" onClick={() => addToCart(product.name)}>
                В кошик
              </Button>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-white py-6 mt-12 shadow-inner text-center text-sm text-gray-500 border-t border-gray-200">
        © 2025 ШмаК. Усі права захищено.
      </footer>
    </div>
  );
}
