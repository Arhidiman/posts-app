import React, {useState, useEffect, useRef} from 'react';
import _debounce from 'lodash/debounce';
import {Post} from "@/entities/Post";
import {useSelector, useDispatch} from "react-redux";
import {useGetAllPostsQuery} from "@/shared/api/queries/postsApi.ts";
import {setPosts} from "@/featutes/InfiniteScrollList/store";
import type {IPost} from "@/shared/types/types.ts";
import type {RootState} from "@/app/store";
import './InfiniteScrollList.scss'

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

    const fetchMoreData = (isScrollDown?: boolean, initialItems?: number) => {
        let newItems: IPost[] | undefined = undefined
        let newStartIndex = startIndex
        let newEndIndex = endIndex
        const additionalItems = Math.ceil(renderPostsNum/2)
        if(isScrollDown && data) {
            newStartIndex = endIndex <= data.length - 1 ? startIndex + additionalItems : startIndex
            newEndIndex = endIndex <= data.length - 1 ? newStartIndex + renderPostsNum : data.length
        }
        if(!isScrollDown && data && !initialItems) {
            newStartIndex = startIndex - renderPostsNum > 0 ? startIndex - additionalItems : 0
            newEndIndex = newStartIndex > 0 ? endIndex - additionalItems : renderPostsNum
        }
        if(data && infiniteScrollPosts.posts) {
            newItems = data.slice(newStartIndex, newEndIndex)
        }
        if(initialItems && data && infiniteScrollPosts.posts ) {
            newItems = data.slice(newStartIndex, initialItems)
        }
        setStartIndex(newStartIndex)
        setEndIndex(newEndIndex)
        dispatch(setPosts(newItems))
        setLoading(false);
    }

    const handleScroll = _debounce((e: React.WheelEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if(container) {
            const isScrollDown = e.deltaY > 0
            const isCloseToListEnd = container.scrollTop + container.clientHeight >= container.scrollHeight - 500 && isScrollDown
            const isCloseToListStart = container.scrollTop <= 300 && e.deltaY < 0 && !isScrollDown
            if((isCloseToListEnd || isCloseToListStart) && !loading) {
                setLoading(true);
                fetchMoreData(isScrollDown);
            }
        }
    }, 50)

    useEffect(() => {
        const initialData = data && data.slice(0, renderPostsNum)
        dispatch(setPosts(initialData))
    },[data]);

    useEffect(() => {
        let containerHeight = 0
        if (containerRef.current) containerHeight = containerRef.current.clientHeight
        const renderedPosts = Math.ceil(containerHeight/elemHeight) + 6
        fetchMoreData(undefined, renderedPosts)
        setRenderPostsNum(renderedPosts)
        setEndIndex(renderedPosts)
    }, [])

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
            className='infinite-scroll-list'
            ref={containerRef}
            onWheel={handleScroll}
        >
            <div
                className='infinite-scroll-list-container'
                style={{ position: 'absolute', width: '100%' }}>
                {infiniteScrollPosts.posts && infiniteScrollPosts.posts.map(post)}
                {loading && <div>Loading...</div>}
            </div>
        </div>
    )
}