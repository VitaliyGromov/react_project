import React from "react";
import './styles/App.css';
import About from "./pages/About";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/ui/navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/about' element={<About/>}>
                </Route>
                <Route path='/posts' element={<Posts/>}>
                </Route>
                <Route path='*' element={<Error/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
