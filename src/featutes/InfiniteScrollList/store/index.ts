import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {IPost} from "@/shared/types/types.ts";

interface IInfiniteScroll {
    posts: IPost[] | undefined
}

const initialState: IInfiniteScroll = {
    posts: []
}

const infiniteScrollPosts = createSlice({
    name: "infiniteScrollPosts",
    initialState: initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[] | undefined>) => {
            state.posts = action.payload || []
        }
    }
})

export const {setPosts} = infiniteScrollPosts.actions
export default infiniteScrollPosts.reducer