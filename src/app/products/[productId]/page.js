// src/app/products/[productId]/page.js
import '../products.css';
import Image from 'next/image';
import { products } from "../data/mockProducts";
import BackButton from "../../../components/common/BackButton";

export default async function ProductDetailPage({ params }) {
  const { productId } = await params;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="product-not-found">Ürün bulunamadı.</div>;
  }

  return (
    <div className="product-detail-container">
        <BackButton />
      <h1 className="product-title">{product.name}</h1>

      
      <Image
        className="product-image"
        src={product.imgUrl}
        alt={product.name}
        width={360}
        height={360}
      />

      <Image
        className="brand-avatar"
        src={product.avatarUrl}
        alt="Marka avatarı"
        width={60}
        height={60}
      />

      <p className="product-price">
        Fiyat: {product.price} ₺
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map(p => ({ productId: p.id }));
}
