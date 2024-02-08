const express = require('express')

// controller functions
const { loginUser, signupUser, deleteUser } = require('../controllers/usercontroller')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// delete route
router.post('/delete', deleteUser)

module.exports = router