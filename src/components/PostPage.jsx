import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "./ui/loader/Loader";

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading] = useFetching(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });
    const [fetchСomments, isCommentsLoading] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchСomments(params.id);
    }, []);

    return (
        <div>
            <h1>Вы на странице поста c id {params.id}</h1>
            {isLoading
                ?<Loader/>
                :<div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isCommentsLoading
                ?<Loader/>
                :<div>
                    {comments.map(comment =>
                        <div style={{marginTop: '15px'}}>
                            <h5>
                                {comment.email}
                            </h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostPage;