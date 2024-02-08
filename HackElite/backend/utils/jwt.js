const jwt = require('jsonwebtoken')

const createJWT = ({ payload }) => {

    // Creating the token.
    const token = jwt.sign(payload, process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME })
    return token;
}

// Verify the token.
const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

// Using cookies.
const attachCookiesToResponse = ({ res, user }) => {

    const token = createJWT({ payload: user })
    const oneDay = 1000 * 60 * 60 * 24

    // Adding the cookie.
    res.cookie('token', token, {
        httpOnly: false,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        sameSite: 'lax'
    })
}

module.exports = { createJWT, isTokenValid, attachCookiesToResponse }