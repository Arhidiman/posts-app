import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import infiniteScrollPosts from '@/featutes/InfiniteScrollList/store/index.ts'
import postPage from '@/pages/PostPage/store/index.ts'
import {postsApi} from "@/shared/api/queries/postsApi.ts"

export const store = configureStore({
    reducer: {
        infiniteScrollPosts,
        postPage,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware,)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>