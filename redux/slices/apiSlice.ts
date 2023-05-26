import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductArray} from '../../types'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductArray, any>({
            query: () => '/products'
        })
    })

})

export const {
    useGetProductsQuery
} = apiSlice

export default apiSlice.reducer