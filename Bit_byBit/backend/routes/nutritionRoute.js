// routes/nutritionRoute.js

const express = require('express');
const router = express.Router();
const {getNutritionData} = require('../controllers/nutritionController');

// GET nutrition data
router.post('/', getNutritionData);

module.exports = router;
