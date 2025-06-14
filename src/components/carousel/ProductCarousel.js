import { Carousel } from 'antd';
import "../../app/products/products.css"
import Image from "next/image";



export default function ProductCarousel( { className, src1, src2, src3, src4, alt, width, height }) {

    

  return (
    <>
      <Carousel className='product-carousel'>
        <div className='product-image'>
          <Image
          className={className}
          src={src1}
          alt={alt}
          width={width}
          height={height}
        />
        </div>
        <div>
          <h3 >2</h3>
        </div>
        <div>
          <h3 >3</h3>
        </div>
        <div>
          <h3 >4</h3>
        </div>
      </Carousel>
    </>
  );
}
