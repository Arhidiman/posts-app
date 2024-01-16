import React from "react"
import {Post} from "@/entities/Post";
import {useSelector} from "react-redux";
import {useGetAllPostsQuery} from "@/pages/MainPage/api/postsApi.ts";
import type {RootState} from "@/app/store";
import type {IPost} from "@/shared/types/types.ts";
import './MainPage.scss'

interface IMainPage {

}



export const MainPage: React.FC<IMainPage> = () => {

    const {posts} = useSelector((state: RootState) => state)

    const {data} = useGetAllPostsQuery()
    console.log(data)

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
               {data && data.map(post)}
           </div>
       </div>
    );
}