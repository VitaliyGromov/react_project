import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "./PostPage";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<PostPage/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;