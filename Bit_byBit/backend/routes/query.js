const express = require('express')
const router = express.Router()

//Controller Functions
const { getQuery } = require('../controllers/querycontroller')

// Get Disease
router.get('/', getQuery)

module.exports = router