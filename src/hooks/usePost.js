import {useMemo} from "react";

export const useSortedPosts = (posts, sortType) => {
    const sortedPosts = useMemo(() => {
        if(sortType){
            return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]));
        }
        return posts;
    }, [sortType, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sortType, query) => {
    const sortedPosts = useSortedPosts(posts, sortType);

    const sortedAndSelectedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query));
    }, [query, sortedPosts]);

    return sortedAndSelectedPosts;
}