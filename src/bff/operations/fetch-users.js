import { ROLE } from '../constants';
import { getUsers } from '../api';
import { sessions } from '../sessions';

//Запрос ролей
export const fetchUsers = async (hash) => {
    //Зпрос с сервера пользователя
    //const existedUser = await getUsers(regLogin);
    const accessRoles = [ROLE.ADMIN];
    //Проверка наличия пользователя в БД
    const access = await sessions.access(hash, accessRoles);
    if (!access) {
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
