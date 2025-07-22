
const categories = [
  {
    name: "Еко‑товари",
    subcategories: [
      {
        name: "Бамбуковий посуд",
        products: Array.from({ length: 20 }).map((_, i) => ({
          name: `Бамбуковий товар ${i + 1}`,
          description: "Еко-дружній товар.",
          price: 199,
          image: `/images/eco-${i + 1}.jpg`,
        })),
      },
      {
        name: "Шопери",
        products: Array.from({ length: 20 }).map((_, i) => ({
          name: `Шопер ${i + 1}`,
          description: "Зручний і багаторазовий.",
          price: 149,
          image: `/images/shopper-${i + 1}.jpg`,
        })),
      },
    ],
  },
  {
    name: "Здоров'я та фітнес",
    subcategories: [
      {
        name: "Фітнес-гумки",
        products: Array.from({ length: 20 }).map((_, i) => ({
          name: `Гумка ${i + 1}`,
          description: "Для занять спортом.",
          price: 99,
          image: `/images/fitness-${i + 1}.jpg`,
        })),
      },
    ],
  },
];

export default categories;
