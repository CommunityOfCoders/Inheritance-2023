const express = require('express')
const router = express.Router()

//Controller Functions
const { getallNews, getSearchNews, getDeepSearch } = require('../controllers/newscontroller')

// Get Disease
router.get('/general',getallNews)
router.get('/search',getSearchNews)
router.get('/deepsearch',getDeepSearch)

module.exports = router