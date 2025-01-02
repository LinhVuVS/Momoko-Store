import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";
import { HandCoins, ShieldCheck, Truck, UserRound } from "lucide-react";
import React from "react";

const ProductDetails = async ({ params }: { params: { productId: string } }) => {
    const productDetails = await getProductDetails(params.productId);
    const relatedProducts = await getRelatedProducts(params.productId);
    return (
        <div>
            <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
                <Gallery productMedia={productDetails.media} />
                <ProductInfo productInfo={productDetails} />
            </div>

            <div className="flex items-stretch px-[120px] max-xl:px-[120px] py-5 mt-6 max-md:px-6 gap-8">
                <div className="flex flex-col items-center flex-1">
                    <div className="text-heading2-bold">Mô tả sản phẩm</div>
                    <div
                        className="mt-3 text-[20px]"
                        dangerouslySetInnerHTML={{ __html: productDetails.description }}
                    />
                </div>
                <div className="flex flex-col w-[320px] max-xl:hidden">
                    <div className="uppercase bg-[#2f6950] p-5 text-white text-body-bold border-b-[#fff237d4] border-b border-solid">
                        Chính sách cửa hàng
                    </div>
                    <p className="mt-3">Khi mua hàng tại website của chúng tôi, quý khách sẽ được:</p>
                    <ul className="mt-3">
                        <li className="flex gap-3 py-2">
                            <HandCoins />
                            <span>Thanh toán dễ dàng và bảo mật</span>
                        </li>
                        <li className="flex gap-3 py-2">
                            <Truck />
                            <span>Giao hàng nhanh chóng</span>
                        </li>
                        <li className="flex gap-3 py-2">
                            <UserRound />
                            <span>Bảo hàng 1 đổi 1 nếu có lỗi của nhà sản xuất</span>
                        </li>
                        <li className="flex gap-3 py-2">
                            <ShieldCheck />
                            <span>Cam kết 100% hàng chính hãng</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center px-[60px] py-5 max-md:px-3">
                <p className="text-heading2-bold">Sản phẩm liên quan</p>
                <div className="flex flex-wrap gap-16 justify-center items-center mt-8">
                    {relatedProducts?.map((product: ProductType) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;

export const dynamic = "force-dynamic";
