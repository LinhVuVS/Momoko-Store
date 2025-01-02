import ProductCard from '@/components/ProductCard'
import { getSearchedProducts } from '@/lib/actions/actions'
import React from 'react'

const SearchPage = async ({params} : {params: {query: string}}) => {
  const searchProducts = await getSearchedProducts(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
        <p className='text-heading3-bold my-10'>Kết quả tìm kiếm cho {decodedQuery}</p>
        {!searchProducts || searchProducts.length === 0 && (
            <p className='text-bold-body '>Không có kết quả tìm kiếm</p>
        )}
        <div className='flex flex-wrap justify-between gap-16'>
            {searchProducts.map((product:any) =>(
                <ProductCard key={product._id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default SearchPage

export const dynamic = "force-dynamic";
