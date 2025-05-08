import "./products.css"
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import { brandImages, productImages, BrandAvatar } from "@/assets/images";

const products = [
    {
      Name: "Ürün 1",
      Price: "100",
      ImgUrl: productImages.bere,
      AvatarUrl: BrandAvatar.nike,
    },
    {
      Name: "Ürün 2",
      Price: "150",
      ImgUrl: productImages.mont,
      AvatarUrl: BrandAvatar.nike,
    },
    {
      Name: "Ürün 3",
      Price: "200",
      ImgUrl: productImages.sapka,
      AvatarUrl: BrandAvatar.nike,
    },
    {
      Name: "Ürün 4",
      Price: "250",
      ImgUrl: productImages.sneakers,
      AvatarUrl: BrandAvatar.nike,
    },
    // ... diğer ürünler
  ];
  
  export default function ProductsPage() {
    return (
      <div
        className="products-grid"
      >
        {products.map((product, index) => (
          <ShoppingCard
            key={index}
            Name={product.Name}
            Price={product.Price}
            ImgUrl={product.ImgUrl}
            AvatarUrl={product.AvatarUrl}
          />
        ))}
      </div>
    );
  }