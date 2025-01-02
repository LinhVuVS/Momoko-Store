import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductList = async () => {
    const products = await getProducts();

    // Giới hạn số lượng sản phẩm hiển thị (ví dụ: 5 sản phẩm)
    const displayedProducts = products?.slice(0, 4);

    return (
        <div className="flex flex-col items-center gap-10 py-8 px-5">
            <p className="text-heading1-bold">SẢN PHẨM NỔI BẬT</p>
            {!displayedProducts || displayedProducts.length === 0 ? (
                <p className="text-body-bold">No products found</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-16">
                    {displayedProducts.map((product: ProductType) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}

            <Link
                href="/products"
                className="
                    text-[17px] bg-[#2f6950] text-[white] 
                    px-[45px] py-[14px] rounded-[20px] mt-[16px] 
                    [transition:all_0.3s_ease-in-out_0s] 
                    hover:border-[solid] hover:border-[2px] 
                    hover:border-[#2f6950] hover:bg-transparent 
                    hover:text-[#2f6950] mb-[16px]"
            >
                VIEW ALL
            </Link>
        </div>
    );
};

export default ProductList;
