"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
    product: ProductType;
    updateSignInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignInUser }: ProductCardProps) => {
    return (
        <Link
            href={`/products/${product._id}`}
            className="w-[350px] flex flex-col gap-2 p-[24px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg object-cover"
        >
            <img src={product.media[0]} alt="product" className="h-[250px] rounded-lg object-cover" />
            <div>
                <p className="text-base-bold truncate ">{product.title}</p>
                <p className="text-small-medium text-grey-2">{product.category}</p>
                <div className="flex justify-between items-center">
                    <p>{product.price.toLocaleString("vi-VN")} đ</p>
                    <HeartFavorite product={product} updateSignInUser={updateSignInUser} />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
