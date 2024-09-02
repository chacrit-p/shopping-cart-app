import Image from "next/image";
import PriceFormatter from "./PriceFormatter";

interface CardProps {
  image_src: string;
  price: number;
  name: string;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function Card({
  image_src,
  price,
  name,
  quantity,
  onAdd,
  onRemove,
}: Readonly<CardProps>) {
  return (
    <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow-lg">
      <Image
        src={image_src}
        alt={name}
        width={200}
        height={220}
        className="mb-4"
      />
      <p className="text-center text-2xl mb-2 font-semibold">{name}</p>
      <PriceFormatter price={price} />
      <div className="flex items-center space-x-4 mt-4">
        <button
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={onRemove}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </div>
  );
}
