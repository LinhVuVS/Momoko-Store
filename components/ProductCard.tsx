"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Heart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: ProductType }) => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [signInUser, setSignInUser] = useState<UserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users`);
      const data = await res.json();
      setSignInUser(data);
      setIsLiked(data.wishlist.includes(product._id));
      setLoading(false);
    } catch (err) {
      console.error("[users_GET]", err);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        setLoading(true);
        const res = await fetch(`/api/users/wishlist`, {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
        setSignInUser(updatedUser);
        setIsLiked(updatedUser.wishlist.includes(product._id));
      }
    } catch (err) {
      console.error("[wishlist_POST]", err);
    }
  };

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
          <button onClick={handleLike}>
            <Heart fill={`${isLiked ? "red" : "white"}`} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
