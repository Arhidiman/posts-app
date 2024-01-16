import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";

export const AppRouter = ()=> {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='*' element={null}/>
            </Routes>
        </BrowserRouter>
    )

}