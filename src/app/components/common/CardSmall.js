import Link from 'next/link';
import Image from 'next/image';

export default function CardSmall({ link, imageSrc }) {
  return (
    <Link href={link}>
      <div className="card">
        <div className="card-image">
          <Image 
            src={imageSrc} 
            alt=""
            layout="fill" 
            objectFit="cover"
            className="image"
          />
        </div>
        <style jsx>{`
          .card {
            display: block;
            text-decoration: none;
            color: #fe8358;
            width: 250px;
            
            
          }
          .card-image {
            position: relative;
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 30px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
          
          .card-image :global(img) {
            transition: transform 0.5s ease;
          }
          .card-image:hover :global(img) {
            transform: scale(1.1);
          }
          .card-title {
            margin-top: 10px;
            font-size: medium;
            text-align: center;
          }
        `}</style>
      </div>
    </Link>
  );
}
