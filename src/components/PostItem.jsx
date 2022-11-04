import React from 'react';
import MyButton from "./ui/button/MyButton";
import {useNavigate} from "react-router-dom";


const PostItem = (props) => {
    const route = useNavigate();
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                    <div className="post__btn">
                        <MyButton onClick={() => route(`/posts/${props.post.id}`)}>Открыть</MyButton>
                        <MyButton onClick={() => props.remove(props.post)}>Удалить!</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;