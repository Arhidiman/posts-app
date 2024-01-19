import {FC} from "react"
import { useParams, Link } from 'react-router-dom';
import {Button} from "@/shared/ui/Button/Button.tsx";

export const PostDetailPageHeader: FC = () => {

    const {id} = useParams<{ id: string }>()
    const postId = id ? +id : undefined

    return (
        <div className='post-detail-page-header'>
            <Link to='/'>
                <Button>Назад</Button>
            </Link>
            <h2>Детали поста номер {postId}</h2>
        </div>
    );
}