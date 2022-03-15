import Image from "next/image";
import Link from "next/link";

const Guitar = ({ guitar }) => {
  const { description, url, image, name, price } = guitar;
  return (
    <div>
      <Image
        layout="responsive"
        width={500}
        height={350}
        src={image.url}
        alt={`Imagen Guitarra ${name}`}
      />
      <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
          <Link href={`/guitars/${url}`}>
              Ver Producto
          </Link>
      </div>
    </div>
  );
};

export default Guitar;
