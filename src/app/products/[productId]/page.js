// src/app/products/[productId]/page.js
import "../products.css";
import Image from "next/image";
import { products } from "../data/mockProducts";
import BackButton from "../../../components/common/BackButton";
import ProductCarousel from "@/components/carousel/ProductCarousel";

export default async function ProductDetailPage({ params }) {
  const { productId } = await params;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="product-not-found">Ürün bulunamadı.</div>;
  }

  console.log(product.imgUrl.src);

  return (
    <div className="margin-top-2">
      <BackButton />
      <h1 className="product-title">{product.name}</h1>

      <div className="info-container">
        <div className="carousel-container">
          <ProductCarousel
            className="product-image"
            src1={product.imgUrl.src}
            src2="/path/to/image2.jpg"
            src3="/path/to/image3.jpg"
            src4="/path/to/image4.jpg"
            alt={product.name}
            width={360}
            height={360}
          />
        </div>

        <div className="detail-container">
          <div>
            <Image
              className="brand-avatar"
              src={product.avatarUrl}
              alt="Marka avatarı"
              width={70}
              height={70}
            />
          </div>

          <p className="product-price">Fiyat: {product.price} ₺</p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((p) => ({ productId: p.id }));
}
