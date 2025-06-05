// app/products/[categoryId]/page.jsx

import CategoryClient from "./CategoryClient";
import { categories } from "../data/mockCategories";

export async function generateStaticParams() {
  return categories.map((c) => ({ categoryId: c.categoryId }));
}

export default function CategoryPage({ params }) {
  // Burada sadece alt bileşeni render ediyoruz ve param’ları paslıyoruz.
  return <CategoryClient params={params} />;
}
