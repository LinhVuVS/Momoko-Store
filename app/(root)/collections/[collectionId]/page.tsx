import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({ params }: { params: { collectionId: string } }) => {
    const collectionDetails = await getCollectionDetails(params.collectionId);

    return (
        <div>
            <div className="px-10 py-5 flex flex-col items-center gap-8">
                <img
                    src={collectionDetails.image}
                    alt="collection"
                    className="w-full h-[400px] object-cover rounded-xl"
                />
                <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
                <div className="flex flex-wrap items-center justify-center gap-16 mx-auto">
                    {collectionDetails.products.map((product: ProductType) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
