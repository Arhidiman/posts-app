import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {IPost} from "@/shared/types/types.ts";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllPosts: builder.query<IPost[], string>({
            query: () => `/posts`,
        }),
    }),
})

export const { useGetAllPostsQuery } = postsApi