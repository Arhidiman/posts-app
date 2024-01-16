import React, {useEffect} from "react"
import {Post} from "@/entities/Post";
import {useSelector, useDispatch} from "react-redux";
import {useGetAllPostsQuery} from "@/pages/MainPage/api/postsApi.ts";
import {setPosts} from "@/pages/MainPage/store";
import type {RootState} from "@/app/store";
import type {IPost} from "@/shared/types/types.ts";
import './MainPage.scss'

interface IMainPage {

}



export const MainPage: React.FC<IMainPage> = () => {

    const {posts} = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const {data} = useGetAllPostsQuery()

    useEffect(() => {
        dispatch(setPosts(data))
    }, [data]);

    console.log(posts)
    const post = (post: IPost, i: number) => {
        return <Post
            key={post.id}
            id={post.id}
            postNum={i + 1}
            title={post.title}
            body={post.body}
        />
    }

    return (
       <div className='main-page'>
           <div className='main-page-posts'>
               {posts.posts && posts.posts.map(post)}
           </div>
       </div>
    );
}