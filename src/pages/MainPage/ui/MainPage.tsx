import React from "react"
import {Post} from "@/entities/Post";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store";
import './MainPage.scss'

interface IMainPage {

}

interface IPost {
    _id: string | number,
    postNum: number,
    title: string,
    text: string
}

export const MainPage: React.FC<IMainPage> = () => {

    const {posts} = useSelector((state: RootState) => state)
    const post = (data: IPost) => {
        return <Post
            key={data._id}
            _id={data._id}
            postNum={data.postNum}
            title={data.title}
            text={data.text}
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