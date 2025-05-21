import "./products.css";
import Link from "next/link";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import { categories } from "../products/data/mockCategories";
import { products } from "../products/data/mockProducts";

export default function ProductsPage() {
  return (
    <div className="">
      <h1 className="">Tüm Ürünler</h1>
      <ul className="mb-6 flex gap-4 list-none p-0">
        {categories.map(c => (
          <li key={c.categoryId}>
            <Link href={`/products/${c.categoryId}`} className="underline">
              {c.categoryName}
            </Link>
          </li>
        ))}
      </ul>
      <div className="products-grid">
        {products.map((product, index) => (
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
