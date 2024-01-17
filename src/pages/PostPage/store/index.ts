import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {IPost} from "@/shared/types/types.ts";

interface IPostsPage {
    post: IPost |  undefined
}

const initialState: IPostsPage = {
    post: undefined
}

const postPageSlice = createSlice({
    name: "postPage",
    initialState: initialState,
    reducers: {
        setPost: (state, action: PayloadAction<IPost | undefined>) => {
            console.log('PAYLOAD:', action.payload)
            state.post = action.payload
        }
    }
})

export const {setPost} = postPageSlice.actions
export default postPageSlice.reducer