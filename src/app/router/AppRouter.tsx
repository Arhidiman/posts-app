import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {PostDetailPage} from "@/pages/PostPage";

export const AppRouter = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/posts/:id' element={<PostDetailPage/>}/>
                <Route path='*' element={<div> 404 Page not found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}