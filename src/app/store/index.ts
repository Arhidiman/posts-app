import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import posts from '@/pages/MainPage/store/index.ts'
import {postsApi} from "@/pages/MainPage/api/postsApi.ts"

export const store = configureStore({
    reducer: {
        posts,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)

console.log(postsApi.reducerPath)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>