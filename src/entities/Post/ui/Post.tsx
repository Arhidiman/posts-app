
import {Button} from "@/shared/ui/Button/Button.tsx";
import { Link } from 'react-router-dom';
import type {IPost} from "@/shared/types/types.ts";
import './Post.scss'


export const Post = ({id, postNum, title, body}: IPost) => {
    return (
        <div key={id} className='post'>
            <div className='post-content'>
                <div className='post-content-info'>
                    <span className='post-num'>{postNum}</span>
                    <h3 className='post-title'>{title}</h3>
                </div>
                <p className='post-text'>{body}</p>
            </div>
            <Button>
                <Link to={`/posts/${id}`}>
                    Просмотр
                </Link>
            </Button>
        </div>
    )
}
