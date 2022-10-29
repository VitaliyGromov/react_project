import React, {useEffect, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/ui/loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sortType: '', query: ''});
    const [modal, setModal] = useState(false);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    });

    const sortedAndSelectedPosts = usePosts(posts, filter.sortType, filter.query);

    useEffect(() => {
        fetchPosts();
    }, []);

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
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList remove={removePosts} posts={sortedAndSelectedPosts} title='Список различных групп'/>
            }
            {/*{sortedAndSelectedPosts.length
                ?
                <PostList remove={removePosts} posts={sortedAndSelectedPosts} title='Список различных групп'/>
                : <h1 style={{textAlign: "center"}}>
                    Посты не найдены!
                </h1>
            }*/}
            <MyButton style={{marginTop: "15px"}} onClick={() => setModal(true)}>
                Создать новый пост
            </MyButton>
        </div>
    );
}

export default App;
