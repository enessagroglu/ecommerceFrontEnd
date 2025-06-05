
"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";
import ShoppingCard from "../../../components/ShoppingCard/ShoppingCard";
import { categories } from "../data/mockCategories";
import { products } from "../data/mockProducts";
import { filterByCategory } from "../utils/filterByCategory";
import "../products.css";

export default function CategoryClient({ params }) {
  const router = useRouter();

  // 1. Adım: Promise içindeki value'ya erişim
  // ReactPromise tipi, resolved olduğunda `params.value` alanında değeri (string) tutuyor.
  const rawJsonString = params.value; // Örn: "{\"categoryId\":\"1\"}"

  // 2. Adım: JSON.parse ile gerçek objeye dönüştürme
  const parsedParams = JSON.parse(rawJsonString);
  // Şimdi parsedParams = { categoryId: "1" }

  // 3. Adım: categoryId’yi ayıklayıp gerekirse number’a çevirme
  const categoryIdString = parsedParams.categoryId; // "1"

  // Sonrasında mockCategories içindeki ID’leri number tutuyorsanız:
  const category = categories.find((c) => c.categoryId === categoryIdString);

  // Ürünleri filtreleme (örneğin product.categoryId sayısal bir field ise)
  const filtered = filterByCategory(products, categoryIdString);

  // “Tüm Kategoriler”e giderken:
  const goToAllProducts = () => {
    router.push("/products");
  };

  return (
    <div>
      <div className="categoryTop">
        <h1 className="categoryBaslik">{category?.categoryName}</h1>

        {/* AntD butonuna event handler ekliyoruz */}
        <Button className="custom-btn" onClick={goToAllProducts}>
          Tüm Kategoriler
        </Button>
      </div>

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
