import { ROLE } from '../constants';
import { getRoles } from '../api';
import { sessions } from '../sessions';

//Запрос ролей
export const fetchRoles = async (userSession) => {
    //Зпрос с сервера пользователя
    //const existedUser = await getUser(regLogin);
    const accessRoles = [ROLE.ADMIN];
    //Проверка наличия пользователя в БД
    if (!sessions.access(userSession, accessRoles)) {
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
