import { getUser, addUser } from '../api';
import { sessions } from '../sessions';

//Сервис регистрации
export const register = async (regLogin, regPassword) => {
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
};
