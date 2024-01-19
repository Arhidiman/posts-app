import React, {useEffect} from "react"
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {setPost} from "@/pages/PostPage/store";
import {useGetSinglePostQuery} from "@/shared/api/queries/postsApi.ts";
import {PostDetailPageHeader} from "@/pages/PostPage/ui/PostDetailPageHeader/PostDetailPageHeader.tsx";
import {Post} from "@/entities/Post";
import {Loader} from "@/shared/ui/Loader/Loader.tsx";
import type {RootState} from "@/app/store";
import './PostDetailPage.scss'

export const PostDetailPage: React.FC = () => {

    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    const postId = id ? +id : undefined
    const {data,isLoading} = useGetSinglePostQuery(postId)
    const {postPage} = useSelector((state: RootState) => state)

    const post = () => {
        if(isLoading) {
            return <Loader/>
        }
        if(postPage.post) {
            return(
                <Post
                    id={postPage.post.id}
                    detailed
                    postNum={postPage.post.id}
                    title={postPage.post.title}
                    body={postPage.post.body}
                />
            )
        }
    }

    useEffect(() => {
        dispatch(setPost(data))
    }, [data]);

    return (
        <div className='post-detail-page'>
            <PostDetailPageHeader/>
            {post()}
        </div>

    );
}