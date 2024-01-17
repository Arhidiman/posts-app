import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {IPost} from "@/shared/types/types.ts";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const singlePostApi = createApi({
    reducerPath: 'singlePostApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getSinglePost: builder.query<IPost, number | undefined>({
            query: (id: number | undefined) => `/posts/${id}`,
        }),
    }),
})

export const {useGetSinglePostQuery} = singlePostApi
