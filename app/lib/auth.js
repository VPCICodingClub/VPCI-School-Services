const tokenKey = 'vpciAuthToken';

function getToken() {
    return localStorage.getItem(tokenKey);
}

function getUser() {
    const token = getToken();

    if (!token || token === 'null') {
        return null;
    }

    const [header, payload] = token.split('.');
    const decodedUser = atob(payload);
    // const userObj = JSON.parse(decodedUser);

    return decodedUser;
}

function isAuthed() {
    const token = getToken();

    return token && token !== 'null';
}

function updateToken(newToken) {
    const currentToken = newToken || getToken();

    localStorage.setItem(tokenKey, currentToken);
}

function clearUser() {
    localStorage.removeItem(tokenKey);
}

export {
    getToken,
    getUser,
    isAuthed,
    updateToken,
    clearUser
};
