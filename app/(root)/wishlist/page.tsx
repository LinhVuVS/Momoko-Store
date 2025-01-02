"use client"

import { getProductDetails } from "@/lib/actions/actions"
import { useUser } from "@clerk/nextjs"
import Loader from "@/components/Loader"
import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"

const Wishlist = () => {
    const {user} = useUser()
    const [loading, setLoading] = useState(true);
    const [signedUser, setSignedUser] = useState<UserType | null>(null)
    const [wishlist, setWishlist] = useState<ProductType[]>([])

    const getUser = async () =>{
        try{
            const res = await fetch("/api/users");  
            const data = await res.json();
            setSignedUser(data);
            setLoading(false);
        } catch(err) {
            console.log("[user_GET]",err)
        }
    }

    useEffect(() =>{
        if(user) {
            getUser();
        }
    }, [user])

    const getWishlistProduct = async () => {
        setLoading(true);
        if(!signedUser) return

        const wishlistProducts = await Promise.all(signedUser.wishlist.map(async (productId) => {
            const res = await getProductDetails(productId)
            return res
        }))
        setWishlist(wishlistProducts)
        setLoading(false)
    }

    useEffect(() =>{
        if(signedUser) {
            getWishlistProduct();
        }
    }, [signedUser])

    const updateSignInUser = (updatedUser: UserType) => {
        setSignedUser(updatedUser)
    }

    return loading ? <Loader /> : (
    <div className="px-10 py-5">
        <p className="text-heading3-bold">Mục yêu thích của bạn </p>
        {wishlist.length === 0 && (
            <p>Không có sản phẩm yêu thích</p>
        )}
        <div className="flex flex-wrap justify-center gap-16">
            {wishlist.map((product) => (
                <ProductCard key={product._id} product={product} updateSignInUser={updateSignInUser}/>
            ))}
        </div>
    </div>
  )
}

export default Wishlist

export const dynamic = "force-dynamic";
