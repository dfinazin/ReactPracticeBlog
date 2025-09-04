import { sessions } from '../sessions';
// Сервис авторизации
export const logout = async (userSession) => {
    sessions.remove(userSession);
};
