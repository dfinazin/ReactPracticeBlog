import { generateDate } from '../utils';

export const transformSession = (dbSession) => ({
    id: dbSession.id,
    hash: dbSession.hash,
    user: dbSession.user,
});
