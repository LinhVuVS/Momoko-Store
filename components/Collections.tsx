import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
    const collections = await getCollections();

    return (
        <div className="flex flex-col items-center gap-10 py-8 px-5 mt-8">
            {!collections || collections.length === 0 ? (
                <p className="text-body-bold">No collections found</p>
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {collections.map((collection: CollectionType) => (
                        <Link href={`/collections/${collection._id}`} key={collection._id}>
                            <Image
                                key={collection._id}
                                src={collection.image}
                                alt={collection.title}
                                width={300}
                                height={200}
                                className=" rounded-full cursor-pointer border-[13px] 
                                            border-[solid] border-[#2f6950] 
                                            transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button
                                    className="h-[60px] w-auto mt-[15px] bg-[#2f6950] text-[#fff] px-[45px] py-[14px] 
                                               rounded-full uppercase hover:border-[1px] hover:border-[solid] 
                                             hover:border-[#2f6950] hover:bg-transparent hover:text-[#2f6950] 
                                               [transition:all_0.3s_ease-in-out_0s] "
                                >
                                    {collection.title}
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Collections;
