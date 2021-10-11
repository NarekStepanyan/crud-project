const jwt = require('jsonwebtoken');

export const tokenCreator = (email, password) => jwt.sign(email+password, '100');

export const compareTokens = (email, password, existTokens) => {
    const currentToken = tokenCreator(email, password);
    return existTokens.find(token => token === currentToken);
}
