import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {IPost} from "@/shared/types/types.ts";

interface IPostsState {
    post: IPost |  undefined
}

const initialState: IPostsState = {
    post: undefined
}

const singlePostSlice = createSlice({
    name: "singlePost",
    initialState: initialState,
    reducers: {
        setPost: (state, action: PayloadAction<IPost | undefined>) => {
            console.log('PAYLOAD:', action.payload)
            state.post = action.payload
        }
    }
})

export const {setPost} = singlePostSlice.actions
export default singlePostSlice.reducer