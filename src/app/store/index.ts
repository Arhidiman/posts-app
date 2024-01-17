import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import posts from '@/pages/MainPage/store/index.ts'
import singlePost from '@/pages/PostPage/store/index.ts'
import {postsApi} from "@/pages/MainPage/api/postsApi.ts"
import {singlePostApi} from "@/pages/PostPage/api/singlePostApi.ts";

export const store = configureStore({
    reducer: {
        posts,
        singlePost,
        [postsApi.reducerPath]: postsApi.reducer,
        [singlePostApi.reducerPath]: singlePostApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        postsApi.middleware,
        singlePostApi.middleware
    )
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>