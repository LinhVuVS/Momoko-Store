"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
    const [selectedColor, setSelectedColors] = useState<string>(productInfo.colors[0]);
    const [selectedSize, setSelectedSize] = useState<string>(productInfo.sizes[0]);

    const [quantity, setQuantity] = useState<number>(1);

    const cart = useCart();

    return (
        <div className="max-w-[400px] flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-heading3-bold leading-[32px]">{productInfo.title}</p>
                <HeartFavorite product={productInfo} />
            </div>
            <div className="flex gap-2">
                <p className="text-base-medium text-grey-2">Category </p>
                <p className="text-base-bold">{productInfo.category}</p>
            </div>

            {productInfo.sizes.length > 0 && (
                <div className="flex items-center gap-2">
                    <p className="text-base-medium text-grey-2">Tình tạng:</p>
                    <div className="flex gap-2">
                        {productInfo.sizes.map((size, index) => (
                            <p key={index} className={` cursor-pointer `} onClick={() => setSelectedSize(size)}>
                                {size}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            <p className="text-heading3-bold">{productInfo.price.toLocaleString("vi-VN")} đ</p>

            <div className="flex gap-2"></div>
            {productInfo.colors.length > 0 && (
                <div className="flex flex-col gap-2">
                    <p className="text-base-medium text-grey-2">Màu sắc:</p>
                    <div className="flex gap-2">
                        {productInfo.colors.map((color, index) => (
                            <p
                                key={index}
                                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                                    selectedColor === color && "bg-black text-white"
                                }`}
                                onClick={() => setSelectedColors(color)}
                            >
                                {color}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {productInfo.tags.length > 0 && (
                <div className="flex items-center gap-2">
                    <p className="text-base-medium text-grey-2">Tags:</p>
                    <div className="flex gap-2">
                        {productInfo.tags.map((tag, index) => (
                            <p key={index} className={` cursor-pointer `} onClick={() => setSelectedSize(tag)}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <p className="text-base-medium text-grey-2"> Số lượng: </p>
                <div className="flex gap-4 items-center">
                    <MinusCircle
                        className="hover:text-red-1 cursor-pointer"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    />
                    <p className="text-body-bold">{quantity}</p>
                    <PlusCircle className="hover:text-red-1 cursor-pointer" onClick={() => setQuantity(quantity + 1)} />
                </div>
            </div>
            <button
                className="border-[3px] border-[solid] border-[#2f6950] text-base-bold py-3 rounded-lg hover:bg-[#2f6950] hover:text-white"
                onClick={() => {
                    cart.addItem({
                        item: productInfo,
                        quantity,
                        color: selectedColor,
                        size: selectedSize,
                    });
                }}
            >
                Thêm vào giỏ hàng
            </button>
        </div>
    );
};

export default ProductInfo;
