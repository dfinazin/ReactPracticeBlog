import { ROLE } from '../constants';
import { getRoles } from '../api';
import { sessions } from '../sessions';

//Запрос ролей
export const fetchRoles = async (hash) => {
    //Зпрос с сервера пользователя
    //const existedUser = await getUser(regLogin);
    const accessRoles = [ROLE.ADMIN];
    //Проверка наличия пользователя в БД
    const access = await sessions.access(hash, accessRoles);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    const roles = await getRoles();

    //Успешная регистрация
    return {
        error: null,
        res: roles,
    };
};
