import React, {useEffect} from "react"
import {useGetAllPostsQuery} from "@/shared/api/queries/postsApi.ts";
import {InfiniteScrollList} from "@/featutes/InfiniteScrollList";
import './MainPage.scss'

interface IMainPage {

}

export const MainPage: React.FC<IMainPage> = () => {

    const {data} = useGetAllPostsQuery('')

    useEffect(() => {
        // dispatch(setPosts(data))
    },[data]);


    return (
       <div className='main-page'>
           <div className='main-page-posts'>
               <InfiniteScrollList/>
           </div>
       </div>
    );
}