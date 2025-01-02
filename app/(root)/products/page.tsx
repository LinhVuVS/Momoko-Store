import { getProducts } from "@/lib/actions/actions";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Products = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const currentPage = parseInt(searchParams.page || "1", 10); // Lấy trang hiện tại từ query string, mặc định là trang 1
    const productsPerPage = 20; // Số lượng sản phẩm trên mỗi trang

    // Fetch tất cả sản phẩm
    const allProducts = await getProducts();

    // Tính toán sản phẩm cho trang hiện tại
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Tính toán số lượng trang
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-10 py-8 px-5">
                    <p className="text-heading1-bold text-3xl font-bold">PRODUCTS</p>
                    {!currentProducts || currentProducts.length === 0 ? (
                        <p className="text-body-bold text-lg font-medium">No products found</p>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {currentProducts.map((product: ProductType) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>
                            {/* Phân trang */}
                            <div className="flex justify-center mt-8">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <a
                                        key={i + 1}
                                        href={`/products?page=${i + 1}`}
                                        className={`mx-1 px-4 py-2 rounded ${
                                            currentPage === i + 1
                                                ? "bg-[#2f6950] text-white"
                                                : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                    >
                                        {i + 1}
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;

export const dynamic = "force-dynamic";
