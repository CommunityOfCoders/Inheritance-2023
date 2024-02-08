const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {

    // Getting the token from cookie.
    const token = req.signedCookies.token
    if (!token) {
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    }

    try {
        // Setting the req.user object.
        const { name, userId, role } = isTokenValid({ token })
        req.user = { name, userId, role }
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    }
}

const authorizePermissions = (...roles) => {

    //  A callback function required by express.
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new CustomError.UnauthorizedError('Unauthorized to access this route')
        }
        next()
    }
}

module.exports = { authenticateUser, authorizePermissions }