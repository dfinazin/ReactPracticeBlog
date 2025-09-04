import { getUser } from '../api';
import { sessions } from '../sessions';

export const authorize = async (authLogin, authPassword) => {
    //Зпрос с сервера пользователя
    const user = await getUser(authLogin);
    //Проверка наличия пользователя в БД
    if (!user) {
        return {
            error: 'Пользователь не найден',
            res: null,
        };
    }

    const { id, login, password, roleId } = user;
    //Проверка совпадения пароля пользователя
    if (authPassword !== password) {
        return {
            error: 'Пароль неверный',
            res: null,
        };
    }
    //Успешная авторизация

    return {
        error: null,
        res: {
            id,
            login,
            roleId,
            session: sessions.create(user),
        },
    };
};
