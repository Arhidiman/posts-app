import {configureStore} from "@reduxjs/toolkit"
import posts from '@/pages/MainPage/store/index.ts'

export const store = configureStore({
    reducer: {
        posts
    },
    devTools: true
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>