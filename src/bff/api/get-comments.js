import { transformComment } from '../transformers';

export const getComments = (postId) =>
    fetch(`http://localhost:3005/comments?post_id=${postId}`)
        .then((loadComments) => loadComments.json())
        .then((loadComments) => loadComments.map(transformComment));
