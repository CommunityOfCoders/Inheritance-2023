const CustomError = require('../errors')

// For permissions of the user and avoid malpratices.
const checkPermissions = (requestUser, resourceUserId) => {
    if (requestUser.role === 'admin') return
    if (requestUser.userId === resourceUserId.toString()) return
    throw new CustomError.UnauthorizedError('Not authorized to access this route')
}

module.exports = checkPermissions