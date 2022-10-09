import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Metallica', body: 'One of the greatest metal band ever'},
        {id: 2, title: 'Megadeath', body: "Metallica's enemy"},
        {id: 3, title: 'Сплин', body: 'Одна из самых крутых групп российского рока'}
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePosts(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePosts} posts={posts} title='Список различных групп'/>
        </div>
    );
}

export default App;
