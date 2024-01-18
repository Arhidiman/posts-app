import React, {useEffect} from "react"
import { useParams, Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {setPost} from "@/pages/PostPage/store";
import {useGetSinglePostQuery} from "@/shared/api/queries/postsApi.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
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
        <div className='post-detail-page'>

            <div className='post-detail-page-header'>
                <Link to='/'>
                    <Button>Назад</Button>
                </Link>
                <h2>Детали поста номер {id}</h2>
            </div>
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
        </div>

    );
}