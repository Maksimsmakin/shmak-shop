
'use client';
import { useState } from "react";

const categories = [
  "Еко‑товари", "Здоров'я та фітнес", "Одяг з принтами", "Для тварин",
  "Офіс і дім", "Розумні гаджети", "Творчі набори", "Спортивний одяг",
  "Спец. харчування", "Цифрові товари"
];

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart((prev) => [...prev, item]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-rose-600">ШмаК</h1>
        <p className="text-lg mt-2">І все готово</p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 px-4 mb-6">
        {categories.map((cat) => (
          <span key={cat} className="bg-white px-4 py-2 rounded-full shadow text-sm">
            {cat}
          </span>
        ))}
      </div>

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <div key={id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all">
            <img
              src={`/images/product-${id}.jpg`}
              alt={`Товар ${id}`}
              className="rounded-xl mb-3 w-full h-48 object-cover"
            />
            <h2 className="font-semibold text-lg text-gray-800">Товар {id}</h2>
            <p className="text-sm text-gray-500">Опис товару {id}…</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-rose-600 font-bold text-lg">₴199</span>
              <button
                className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded text-sm"
                onClick={() => addToCart(`Товар ${id}`)}
              >
                В кошик
              </button>
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
