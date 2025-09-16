import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

//Запрос ролей
export const fetchPosts = async (page, limit) => {
    const [{ posts, pages }, comments] = await Promise.all([
        getPosts(page, limit),
        getComments(),
    ]);
    //Успешная регистрация
    return {
        error: null,
        res: {
            posts: posts.map((post) => ({
                ...post,
                commentsCount: getCommentsCount(comments, post.id),
            })),
            pages,
        },
    };
};
