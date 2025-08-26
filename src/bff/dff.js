import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
    // Сервис авторизации
    async authorize(authLogin, authPassword) {
        //Зпрос с сервера пользователя
        const user = await getUser(authLogin);
        //Проверка наличия пользователя в БД
        if (!user) {
            return {
                error: 'Пользователь не найден',
                res: null,
            };
        }
        //Проверка совпадения пароля пользователя
        if (authPassword !== user.password) {
            return {
                error: 'Пароль неверный',
                res: null,
            };
        }
        //Успешная авторизация
        return {
            error: null,
            res: createSession(user.role_id),
        };
    },
    //Сервис регистрации
    async register(regLogin, regPassword) {
        //Зпрос с сервера пользователя
        const user = await getUser(regLogin);
        //Проверка наличия пользователя в БД
        if (user) {
            return {
                error: 'Логин занят',
                res: null,
            };
        }

        await addUser(regLogin, regPassword);

        //Успешная регистрация
        return {
            error: null,
            res: createSession(user.role_id),
        };
    },
};
