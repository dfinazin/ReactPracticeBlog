import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

//Запрос ролей
export const fetchPosts = async () => {
    const [posts, comments] = await Promise.all([getPosts(), getComments()]);
    //Успешная регистрация
    return {
        error: null,
        res: posts.map((post) => ({
            ...post,
            commentsCount: getCommentsCount(comments, post.id),
        })),
    };
};
