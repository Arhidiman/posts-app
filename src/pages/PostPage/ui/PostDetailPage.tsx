import React, {useEffect} from "react"
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {setPost} from "@/pages/PostPage/store";
import {useGetSinglePostQuery} from "@/shared/api/queries/postsApi.ts";
import {Post} from "@/entities/Post";
import type {RootState} from "@/app/store";
import './PostDetailPage.scss'

export const PostDetailPage: React.FC = () => {

    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    const postId = id ? +id : undefined
    const {data} = useGetSinglePostQuery(postId)
    const {postPage} = useSelector((state: RootState) => state)

    // const {post} = useSelector()

    useEffect(() => {
        dispatch(setPost(data))
    }, [data]);

    return (
        <>
            <h2>Детали поста номер {id}</h2>
            {
                postPage.post &&
                <Post
                    id={postPage.post.id}
                    detailed
                    postNum={postPage.post.id}
                    title={postPage.post.title}
                    body={postPage.post.body}
                />
            }
        </>

    );
}