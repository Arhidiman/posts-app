import React from "react"
import {Post} from "@/entities/Post";
import './MainPage.scss'

interface IMainPage {

}

interface IPost {
    _id: string | number,
    postNum: number,
    title: string,
    text: string
}

const mockData = [
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

export const MainPage: React.FC<IMainPage> = () => {

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
               {mockData && mockData.map(post)}
           </div>
       </div>
    );
}