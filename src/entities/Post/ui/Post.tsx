
import {Button} from "@/shared/ui/Button/Button.tsx";
import { Link } from 'react-router-dom';
import './Post.scss'

interface IPost {
    _id: string | number,
    postNum: number,
    title: string,
    text: string
}

export const Post = ({_id, postNum, title, text}: IPost) => {
    return (
        <div key={_id} className='post'>
            <div className='post-content'>
                <div className='post-content-info'>
                    <span className='post-num'>{postNum}</span>
                    <h3 className='post-title'>{title}</h3>
                </div>
                <p className='post-text'>{text}</p>
            </div>
            <Button>
                <Link to={`/posts/${_id}`}>
                    Просмотр
                </Link>
            </Button>
        </div>
    )
}
