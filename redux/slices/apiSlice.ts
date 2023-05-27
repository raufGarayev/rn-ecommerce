import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductArray} from '../../types'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductArray, any>({
            query: () => '/products'
        }),
        getCategories: builder.query({
            query: () => '/products/categories'
        }),
        getCategoryProduct: builder.query({
            query: (arg) => `/products/category/${arg}`
        })
    })

})

export const {
    useGetProductsQuery,
    useGetCategoriesQuery,
    useGetCategoryProductQuery
} = apiSlice

export default apiSlice.reducer