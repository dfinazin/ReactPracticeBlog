export const getRoles = () =>
    fetch('http://localhost:3005/roles').then((loadRoles) => loadRoles.json());
