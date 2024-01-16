import {createSlice} from "@reduxjs/toolkit"

interface IPost {
    _id: string | number,
    postNum: number,
    title: string,
    text: string
}

interface IPostsState {
    posts: IPost[]
}

const initialState: IPostsState = {
    posts: [
        {
            _id: 1,
            postNum: 1,
            title: 'title 1',
            text: 'text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ',

        },
        {
            _id: 2,
            postNum: 2,
            title: 'title 2',
            text: 'text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ',
        },
        {
            _id: 3,
            postNum: 3,
            title: 'title 3',
            text: 'text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3',
        }
    ]
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        showDetails: (state) => {
            console.log(state)
            state.posts = {...state.posts}
        }
    }
})

export const {showDetails} = postsSlice.actions
export default postsSlice.reducer