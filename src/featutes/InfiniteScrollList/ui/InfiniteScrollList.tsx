import React, {useState, useEffect, useRef} from 'react';
import _debounce from 'lodash/debounce';
import {Post} from "@/entities/Post";
import {useSelector, useDispatch} from "react-redux";
import {useGetAllPostsQuery} from "@/shared/api/queries/postsApi.ts";
import {setPosts} from "@/featutes/InfiniteScrollList/store";
import type {IPost} from "@/shared/types/types.ts";
import type {RootState} from "@/app/store";

export const InfiniteScrollList: React.FC = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const {infiniteScrollPosts} = useSelector((state: RootState) => state)
    const {data} = useGetAllPostsQuery('')
    const containerRef = useRef<HTMLDivElement>(null)
    const [elemHeight] = useState(100)
    const [renderPostsNum, setRenderPostsNum] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(startIndex + renderPostsNum)

    const fetchMoreData = (isScrollDown?: boolean) => {
        let newItems: IPost[] | undefined = undefined
        let newStartIndex = startIndex
        let newEndIndex = endIndex
        const additionalItems = Math.ceil(renderPostsNum/2)
        if(isScrollDown && data) {
            newStartIndex = endIndex < data.length - 1 ? startIndex + 5 : endIndex - 10
            newEndIndex = endIndex <= data.length - 1 ? newStartIndex + renderPostsNum : data.length
        } else {
            newStartIndex = startIndex - renderPostsNum > 0 ? startIndex - additionalItems : 0
            newEndIndex = newStartIndex > 0 ? endIndex - additionalItems : renderPostsNum
        }
        setStartIndex(newStartIndex)
        setEndIndex(newEndIndex)
        if(data && infiniteScrollPosts.posts) {
            newItems =  data.slice(newStartIndex, newEndIndex)
        }
        dispatch(setPosts(newItems))
        setLoading(false);
    };

    const handleScroll = _debounce((e: React.WheelEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if(container) {
            const isScrollDown = e.deltaY > 0
            const isCloseToListEnd = container.scrollTop + container.clientHeight >= container.scrollHeight - 100 && isScrollDown
            const isCloseToListStart = container.scrollTop <= 100 && e.deltaY < 0 && !isScrollDown
            if((isCloseToListEnd || isCloseToListStart) && !loading) {
                setLoading(true);
                fetchMoreData(isScrollDown);
            }
        }
    }, 100)

    useEffect(() => {
        const initialData = data && data.slice(0, renderPostsNum)
        dispatch(setPosts(initialData))
    }, [data]);

    useEffect(() => {
        fetchMoreData()
        let containerHeight = 0
        if (containerRef.current) containerHeight = containerRef.current.clientHeight
        const renderedPosts = Math.ceil(containerHeight/elemHeight) + 6
        setRenderPostsNum(renderedPosts)
        setEndIndex(renderedPosts)
    }, []);

    const post = (post: IPost) => {
        return <Post
            key={post.id}
            id={post.id}
            postNum={post.id}
            title={post.title}
            body={post.body}
            detailed={false}
            height={150}
        />
    }

    return (
        <div
            ref={containerRef}
            style={{
                width: '800px',
                height: '90vh',
                overflowY: 'auto',
                position: 'relative',
                border: 'solid black 3px'
            }}
            onWheel={handleScroll}
        >
            <div style={{ position: 'absolute', width: '100%' }}>
                {infiniteScrollPosts.posts && infiniteScrollPosts.posts.map(post)}
                {loading && <div>Loading...</div>}
            </div>
        </div>
    );
};

export default InfiniteScrollList;