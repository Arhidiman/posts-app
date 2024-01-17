import React, { useState, useEffect, useRef } from 'react';
import {Post} from "@/entities/Post";
import {useSelector, useDispatch} from "react-redux";
import {useGetAllPostsQuery} from "@/pages/MainPage/api/postsApi.ts";
import {setPosts} from "@/pages/MainPage/store";
import type {IPost} from "@/shared/types/types.ts";
import type {RootState} from "@/app/store";

export const InfiniteScrollList: React.FC = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [initialPosts] = useState(6)
    const [addPostsWhileScrolling] = useState(1)
    const {posts} = useSelector((state: RootState) => state)
    const {data} = useGetAllPostsQuery('')
    const containerRef = useRef<HTMLDivElement>(null)

    const fetchMoreData = () => {
        let newItems: IPost[] | undefined = undefined
        if(data && posts.posts) {
            newItems =  data.slice(0, posts.posts.length + addPostsWhileScrolling)
        }
        dispatch(setPosts(newItems))
        setLoading(false);
    };

    const handleScroll = () => {
        const container = containerRef.current;
        if(container) {
            const isCloseToListEnd = container.scrollTop + container.clientHeight >= container.scrollHeight - 100
            if(isCloseToListEnd && !loading) {
                setLoading(true);
                fetchMoreData();
            }
        }
    };

    useEffect(() => {
        const initialData = data && data.slice(0, initialPosts)
        dispatch(setPosts(initialData))
    }, [data]);

    useEffect(() => {
        // Начальная загрузка данных
        fetchMoreData();
    }, []);

    const post = (post: IPost, i: number) => {
        return <Post
            key={post.id}
            id={post.id}
            postNum={i + 1}
            title={post.title}
            body={post.body}
            detailed
        />
    }

    return (
        <div
            ref={containerRef}
            style={{
                width: '800px',
                height: '600px',
                overflowY: 'auto',
                position: 'relative',
                border: 'solid black 3px'
            }}
            onScroll={handleScroll}
        >
            <div style={{ position: 'absolute', width: '100%' }}>
                {posts.posts && posts.posts.map(post)}
                {loading && <div>Loading...</div>}
            </div>
        </div>
    );
};

export default InfiniteScrollList;