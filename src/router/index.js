import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../components/PostPage";
import LoginPage from "../components/LoginPage";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostPage/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <LoginPage/>, exact: true},
]

