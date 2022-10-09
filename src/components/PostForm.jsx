import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost);
        setPost({title: '', body: ''});
    }
    return (
        <form>
            <MyInput type="text"
                     placeholder="Введите название для поста"
                     value={post.title}
                     onChange={event => setPost({...post, title: event.target.value})}/>
            <MyInput type="text"
                     placeholder="Введите текст поста"
                     value={post.body}
                     onChange={event => setPost({...post, body: event.target.value})}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;