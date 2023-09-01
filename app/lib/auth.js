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
    const userObj = JSON.parse(decodedUser);

    return userObj;
}

function isAuthed() {
    const user = getUser();
    let expired = true;

    if (user) {
        const nowInSeconds = Math.round(Date.now()/1000);
        expired = nowInSeconds >= user.exp;
    }

    return user && !expired;
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
