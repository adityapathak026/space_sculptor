import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: '/user'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (cat) => `/products${cat}`
        }),

    })
})

export const {useGetProducts} = productsApi;