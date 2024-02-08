const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse, createTokenUser } = require('../utils')
const CustomError = require('../errors')

const register = async (req, res) => {

    // Taking the values. 
    const { email, name, password } = req.body

    // First registered user is an admin.
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'

    // Create the user.
    const user = await User.create({ name, email, password, role })
    

    // Creating the token and set the cookie.
    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({ res, user: tokenUser })

    res.status(StatusCodes.CREATED).json({ user: tokenUser })
}

const login = async (req, res) => {

    // Taking the values.
    const { email, password } = req.body

    // Check if email and password is provided.
    if (!email || !password) {
        throw new CustomError.BadRequestError('Please provide email and password')
    }

    // Finding the user.
    const user = await User.findOne({ email })

    // Check if user exists.
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials')
    }

    // Comparing the passwords.
    const isPasswordCorrect = user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials')
    }

    // Creating the token and set the cookie.
    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({ res, user: tokenUser })

    res.status(StatusCodes.OK).json({ user: tokenUser })
}

const logout = async (req, res) => {

    // Removing the cookie.
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    })

    res.status(StatusCodes.OK).json({ message: 'User has been logged out' })
}

module.exports = { register, login, logout }