"use client";

import { useUser } from "@clerk/nextjs";
import { Heart as Hearts } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeartFavoriteProps {
  product: ProductType;  
  updateSignInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, updateSignInUser }: HeartFavoriteProps) => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users`);
      const data = await res.json();
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

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
        setIsLiked(updatedUser.wishlist.includes(product._id));
        updateSignInUser && updateSignInUser(updatedUser)
      }
    } catch (err) {
      console.error("[wishlist_POST]", err);
    }
  };
  return (
    <button onClick={handleLike}>
        <Hearts fill={`${isLiked ? "red" : "white"}`}/>
    </button>
  );
};

export default HeartFavorite;
