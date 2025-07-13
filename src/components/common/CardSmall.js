import Link from 'next/link';
import Image from 'next/image';

export default function CardSmall({ link, imageSrc, title }) {
  return (
    <Link href={link} passHref legacyBehavior>
      <a className="card">
        <div className="card-image">
          <Image 
            src={imageSrc} 
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 250px"
            style={{ objectFit: "contain" }} 
            className="image"
          />
        </div>
        <div className="card-title">{title}</div>

        <style jsx>{`
          .card {
            display: block;
            text-decoration: none;
            color: inherit;
            width: 250px;
            margin: 0 auto;
          }

          .card-image {
            position: relative;
            width: 100%;
            height: 250px;
            overflow: hidden;
            border-radius: 30px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            margin-bottom: 10px;
          }

          .card-image :global(img) {
            transition: transform 0.5s ease;
          }

          .card-image:hover :global(img) {
            transform: scale(1.1);
          }

          .card-title {
            text-align: center;
            font-family: monospace;
            font-size: 15px;
            color: #0084d1;
          }
        `}</style>
      </a>
    </Link>
  );
}
