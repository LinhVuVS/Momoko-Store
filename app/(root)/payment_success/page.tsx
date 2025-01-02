"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import React, { useEffect } from "react";

const SuccessfulPayment = () => {
    const cart = useCart();

    useEffect(() => {
        cart.clearCart();
    }, []);
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <p className="text-heading4-bold text-red-1">Thanh toán thành công</p>
            <p>Cảm ơn bạn đã lựa chọn sản phẩm của chúng tôi</p>
            <Link href="/" className="p-4 border text-base-bold hover:bg-black hover:text-white">
                Tiếp tục mua hàng
            </Link>
        </div>
    );
};

export default SuccessfulPayment;

export const dynamic = "force-dynamic";
