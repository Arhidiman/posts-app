import {createSlice} from "@reduxjs/toolkit"
import type {IPost} from "@/shared/types/types.ts";

interface IPostsState {
    posts: IPost[]
}

const initialState: IPostsState = {
    posts: [
        {
            id: 1,
            postNum: 1,
            title: 'title 1',
            body: 'body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 ',

        },
        {
            id: 2,
            postNum: 2,
            title: 'title 2',
            body: 'body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 ',
        },
        {
            id: 3,
            postNum: 3,
            title: 'title 3',
            body: 'body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3',
        }
    ]
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        showDetails: (state, ) => {
            console.log(state)
            state.posts = {...state.posts}
        }
    }
})

export const {showDetails} = postsSlice.actions
export default postsSlice.reducer