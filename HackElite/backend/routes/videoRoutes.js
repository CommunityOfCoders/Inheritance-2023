const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')
const { addUrl, deleteUrl, getUrls } = require('../controllers/videoController')

router.post('/addUrl', [authenticateUser], addUrl)
router.delete('/deleteUrl/:id', [authenticateUser], deleteUrl)
router.get('/get', [authenticateUser], getUrls)

module.exports = router