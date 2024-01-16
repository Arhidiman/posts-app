import React from "react"
import { useParams } from 'react-router-dom';
import {Post} from "@/entities/Post";
import './PostDetailPage.scss'

export const PostDetailPage: React.FC = () => {

    const {id} = useParams()

    return (
        <>
            <h2>Детали поста номер {id}</h2>
            <Post
                _id={1}
                postNum={1}
                title={'mock'}
                text={'mock'}
            />
        </>

    );
}