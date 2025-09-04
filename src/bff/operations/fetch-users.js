import { ROLE } from '../constants';
import { getUsers } from '../api';
import { sessions } from '../sessions';

//Запрос ролей
export const fetchUsers = async (userSession) => {
    //Зпрос с сервера пользователя
    //const existedUser = await getUsers(regLogin);
    const accessRoles = [ROLE.ADMIN];
    //Проверка наличия пользователя в БД
    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    const users = await getUsers();
    //Успешная регистрация
    return {
        error: null,
        res: users,
    };
};
