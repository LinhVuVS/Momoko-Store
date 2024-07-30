import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Heart } from "lucide-react";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold truncate ">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <p>{product.price} đ</p>
          <button>
            <Heart />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;