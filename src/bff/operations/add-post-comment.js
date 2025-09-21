import { addComment, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils';

export const addPostComment = async (hash, userId, postId, content) => {
    const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
    //Проверка наличия пользователя в БД
    const access = await sessions.access(hash, accessRoles);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }
    //Зпрос с сервера пользователя
    await addComment(userId, postId, content);
    const post = await getPost(postId);

    const commentsWithAuthor = await getPostCommentsWithAuthor(postId);
    //Успешная регистрация
    return {
        error: null,
        res: {
            ...post,
            comments: commentsWithAuthor,
        },
    };
};
