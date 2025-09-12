import { deleteComment, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removePostComment = async (hash, postId, id) => {
    const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
    //Проверка наличия пользователя в БД
    const access = await sessions.access(hash, accessRoles);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }
    //Зпрос с сервера пользователя
    await deleteComment(id);
    const post = await getPost(postId);
    const comments = await getComments(postId);

    //Успешная регистрация
    return {
        error: null,
        res: {
            ...post,
            comments,
        },
    };
};
