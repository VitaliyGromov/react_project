import React, {useEffect, useState} from "react";
import '../styles/App.css';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {usePosts} from "../hooks/usePost";
import MyModal from "../components/ui/modal/MyModal";
import PostFilter from "../components/PostFilter";
import MyButton from "../components/ui/button/MyButton";
import PostList from "../components/PostList";
import Pagination from "../components/ui/pagination/Pagination";
import Loader from "../components/ui/loader/Loader";
import PostForm from "../components/PostForm";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sortType: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, pageNumber);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    function changePageNumber(pageNumber) {
        setPageNumber(pageNumber);
    }

    const sortedAndSelectedPosts = usePosts(posts, filter.sortType, filter.query);

    useEffect(() => {
        fetchPosts();
    }, [pageNumber]);

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
            <MyButton style={{marginTop: "5px"}} onClick={() => setModal(true)}>
                Создать новый пост
            </MyButton>
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList remove={removePosts} posts={sortedAndSelectedPosts} title='Список различных групп'/>
            }
            <Pagination pageNumber={pageNumber} changePageNumber={changePageNumber} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;