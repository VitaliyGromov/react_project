import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Metallica', body: 'One of the greatest metal band ever'},
        {id: 2, title: 'Megadeath', body: "Metallica's enemy"},
        {id: 3, title: 'Сплин', body: 'Одна из самых крутых групп российского рока'}
    ]);

    const [filter, setFilter] = useState({sortType: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if(filter.sortType){
            return [...posts].sort((a, b) => a[filter.sortType].localeCompare(b[filter.sortType]));
        }
        return posts;
    }, [filter.sortType, posts]);

    const sortedAndSelectedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePosts(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {sortedAndSelectedPosts.length
                ?
                <PostList remove={removePosts} posts={sortedAndSelectedPosts} title='Список различных групп'/>
                : <h1 style={{textAlign: "center"}}>
                    Посты не найдены!
                </h1>
            }
            <MyButton style={{marginTop: "15px"}} onClick={() => setModal(true)}>
                Создать новый пост
            </MyButton>
        </div>
    );
}

export default App;
