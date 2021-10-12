const jwt = require('jsonwebtoken');

export const findToken = (email, password, existTokens) => {
    const currentToken = jwt.sign(email+password, '100');
    const foundAdmin = existTokens.data.find(obj => obj.accessToken === currentToken);
    return foundAdmin.accessToken;
}

