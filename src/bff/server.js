import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
    // Сервис авторизации
    async logout(session) {
        sessions.remove(session);
    },
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
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },
        };
    },
    //Сервис регистрации
    async register(regLogin, regPassword) {
        //Зпрос с сервера пользователя
        const existedUser = await getUser(regLogin);
        //Проверка наличия пользователя в БД
        if (existedUser) {
            return {
                error: 'Логин занят',
                res: null,
            };
        }

        const user = await addUser(regLogin, regPassword);

        //Успешная регистрация
        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },
        };
    },
};
