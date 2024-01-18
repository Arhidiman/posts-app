
import {Button} from "@/shared/ui/Button/Button.tsx";
import { Link } from 'react-router-dom';
import type {IPost} from "@/shared/types/types.ts";
import './Post.scss'


export const Post = ({id, title, body, detailed, height}: IPost & {detailed: boolean, height: number}) => {

    const postBodyClassname = `post-body ${detailed ? 'detailed' : ''}`

    const button = () => {
        return (
            !detailed &&
            <Button>
                <Link to={`/posts/${id}`}>
                    Просмотр
                </Link>
            </Button>
        )
    }

    const content = () => {
        return (
            <div className='post-content' style={{height: height}}>
                <div className='post-content-info'>
                    <span className='post-num'>{id}</span>
                    <h3 className='post-title'>{title}</h3>
                </div>
                <p className={postBodyClassname}>{body}</p>
            </div>
        )
    }

    return (
        <div key={id} className='post'>
            {content()}
            {button()}
        </div>
    )
}
