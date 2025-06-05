import "./products.css";
import Link from "next/link";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import { categories } from "../products/data/mockCategories";
import { products } from "../products/data/mockProducts";

export default function ProductsPage() {
  return (
    <>
      {/* ====== 1) KATEGORİLER ====== */}
      <div className="container">
        <h1 className="page-title">Tüm Ürünler</h1>
        <ul className="category-grid">
          {categories.map((c) => (
            <li key={c.categoryId} className="category-item">
              <Link href={`/products/${c.categoryId}`} className="category-link">
                {c.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ====== 2) ÜRÜNLER ======
           (bunu container dışında bırakıyoruz ki kendi .products-grid padding’i çalışsın) */}
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
    </>
  );
}