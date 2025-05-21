import "../products.css";
import ShoppingCard from "../../../components/ShoppingCard/ShoppingCard";
import { categories } from "../data/mockCategories";
import { products } from "../data/mockProducts";
import { filterByCategory } from "../utils/filterByCategory";

export async function generateStaticParams() {
  return categories.map((c) => ({ categoryId: c.categoryId }));
}

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.categoryId === categoryId);
  const filtered = filterByCategory(products, categoryId);

  return (
    <div className="">
      <h1 className="">{category?.categoryName}</h1>
      <div className="products-grid">
        {filtered.map((product, index) => (
          <ShoppingCard
            key={index}
            Name={product.name}
            Price={product.price}
            ImgUrl={product.imgUrl}
            AvatarUrl={product.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}
