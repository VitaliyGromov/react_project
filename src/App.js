import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/ui/select/MySelect";
import MyInput from "./components/ui/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Metallica', body: 'One of the greatest metal band ever'},
        {id: 2, title: 'Megadeath', body: "Metallica's enemy"},
        {id: 3, title: 'Сплин', body: 'Одна из самых крутых групп российского рока'}
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        console.log('Функция отработала');
        if(selectedSort){
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSelectedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
    }, [searchQuery, sortedPosts]);

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePosts(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: 20}}/>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Что ищем?"
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка по"
                options={[
                    {value: 'title', name: 'Сортировка по названию'},
                    {value: 'body', name: 'Сортировка по описанию'},
                ]}
            />
            {sortedAndSelectedPosts.length
                ?
                <PostList remove={removePosts} posts={sortedAndSelectedPosts} title='Список различных групп'/>
                : <h1 style={{textAlign: "center"}}>
                    Посты не найдены!
                </h1>
            }
        </div>
    );
}

export default App;
