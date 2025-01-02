"use client";

import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Heart, Menu, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user } = useUser();
    const cart = useCart();

    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [isProductsHovered, setIsProductsHovered] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="sticky h-[110px] w-[100%] top-0 z-10 py-2 px-[60px] flex gap-2 justify-between items-center bg-white max-sm:px-2">
            <Link href="/">
                <Image src="/momoko_logo.png" alt="logo" width={250} height={100} />
            </Link>

            <div className="flex gap-4 text-base-bold max-lg:hidden">
                <Link href="/" className={`hover:text-[#2f6950] ${pathname === "/" && "text-[#2f6950]"} text-[20px]`}>
                    Trang chủ
                </Link>
                <div
                    className="relative"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                >
                    <Link
                        href="/products"
                        className={`hover:text-[#2f6950] ${pathname === "/products" && "text-[#2f6950]"} text-[20px]`}
                    >
                        Sản phẩm
                    </Link>
                    {isProductsHovered && (
                        <>
                            {/* Khoảng trống giữa "Products" và menu con */}
                            <div className="absolute top-full left-0 h-2 w-full bg-transparent"></div>
                            {/* Menu con */}
                            <div className="absolute top-full left-[-50%] py-4 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 w-48 z-20">
                                <Link
                                    href="/collections/676929bb87072794fdae96cb"
                                    className="block px-4 py-3 hover:bg-[#2f6950] hover:text-white"
                                >
                                    Switch
                                </Link>
                                <Link
                                    href="/collections/6768cf3d4e55ff053d29d24f"
                                    className="block px-4 py-3 hover:bg-[#2f6950] hover:text-white"
                                >
                                    Keycaps
                                </Link>
                                <Link
                                    href="/collections/6768ceb44e55ff053d29d240"
                                    className="block px-4 py-3 hover:bg-[#2f6950] hover:text-white"
                                >
                                    Keyboards
                                </Link>
                                <Link
                                    href="/collections/6768cf714e55ff053d29d255"
                                    className="block px-4 py-3 hover:bg-[#2f6950] hover:text-white"
                                >
                                    Keyboard Kits
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <Link
                    href={user ? "/orders" : "/sign-in"}
                    className={`hover:text-[#2f6950] ${pathname === "/orders" && "text-[#2f6950]"} text-[20px]`}
                >
                    Đơn hàng
                </Link>
                <Link
                    href="/contacts"
                    className={`hover:text-[#2f6950] ${pathname === "/contacts" && "text-[#2f6950]"} text-[20px]`}
                >
                    Liên hệ
                </Link>
            </div>

            <div className="flex gap-3 border w-[400px] max-xl:w-auto border-grey-2 px-4 py-3 items-center rounded-2xl">
                <input
                    className="outline-none w-full max-sm:max-w-[120px]"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button disabled={query === ""} onClick={() => router.push(`/search/${query}`)}>
                    <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
                </button>
            </div>

            <div className="relative flex gap-3 items-center">
                <Link
                    href={user ? "/wishlist" : "/sign-in"}
                    className={`group hover:text-[#2f6950] ${
                        pathname === "/wishlist" && "text-[#2f6950]"
                    } flex items-center gap-3 border rounded-lg px-4 py-3 hover:bg-[#2f6950] hover:text-red-1 max-md:hidden`}
                >
                    <Heart className="fill-current group-hover:fill-red-1" />
                </Link>

                <Link
                    href="/cart"
                    className="flex items-center gap-3 border rounded-lg px-4 py-3 hover:bg-[#2f6950] hover:text-white max-md:hidden"
                >
                    <ShoppingCart />
                    <p className="text-base-bold">({cart.cartItems.length})</p>
                </Link>

                <Menu className="cursor-pointer lg:hidden" onClick={() => setDropdownMenu(!dropdownMenu)} />

                {dropdownMenu && (
                    <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
                        <Link href="/" className="hover:text-[#2f6950]">
                            Trang chủ
                        </Link>
                        <Link href="/products" className="hover:text-[#2f6950]">
                            Sản phẩm
                        </Link>
                        <Link href={user ? "/orders" : "/sign-in"} className="hover:text-[#2f6950]">
                            Đơn hàng
                        </Link>
                        <Link href="/contacts" className="hover:text-[#2f6950]">
                            Liên hệ
                        </Link>
                        <Link
                            href="/cart"
                            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-[#2f6950] hover:text-white"
                        >
                            <ShoppingCart />
                            <p className="text-base-bold"> ({cart.cartItems.length})</p>
                        </Link>
                        <Link
                            href={user ? "/wishlist" : "/sign-in"}
                            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-[#2f6950] hover:text-white"
                        >
                            <Heart />
                            <p className="text-base-bold"> ({cart.cartItems.length})</p>
                        </Link>
                    </div>
                )}

                {user ? (
                    <UserButton afterSignOutUrl="/sign-in" />
                ) : (
                    <Link href="/sign-in">
                        <CircleUserRound />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
