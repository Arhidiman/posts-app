import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {IPost} from "@/shared/types/types.ts";

interface IPostsState {
    posts: IPost[] | undefined
}

const initialState: IPostsState = {
    posts: []
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[] | undefined>) => {
            state.posts = action.payload || []
        }
    }
})

export const {setPosts} = postsSlice.actions
export default postsSlice.reducer