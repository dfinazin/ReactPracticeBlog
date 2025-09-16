import { transformPost } from '../transformers';

export const getPost = async (postId) => {
    console.log(postId);
    return fetch(`http://localhost:3005/posts/${postId}`)
        .then((loadedPost) => loadedPost.json())
        .then((loadedPost) => loadedPost && transformPost(loadedPost));
};
