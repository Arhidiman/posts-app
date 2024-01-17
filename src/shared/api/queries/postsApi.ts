import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "@/shared/api/constants/urls.ts";
import type {IPost} from "@/shared/types/types.ts";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllPosts: builder.query<IPost[], string>({
            query: () => `/posts`,
        }),
        getSinglePost: builder.query<IPost, number | undefined>({
            query: (id: number | undefined) => `/posts/${id}`,
        }),
    }),
})

export const {
    useGetAllPostsQuery,
    useGetSinglePostQuery
} = postsApi