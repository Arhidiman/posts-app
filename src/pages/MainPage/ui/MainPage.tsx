import React from "react"
import {InfiniteScrollList} from "@/featutes/InfiniteScrollList";
import './MainPage.scss'

export const MainPage: React.FC = () => {

    return (
       <div className='main-page'>
           <div className='main-page-posts'>
               <InfiniteScrollList/>
           </div>
       </div>
    );
}