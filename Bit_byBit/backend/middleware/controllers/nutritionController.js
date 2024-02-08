// const dotenv = require('dotenv');
require('dotenv').config()
const fetch = require('node-fetch')

const getNutritionData = async (req, res) => {
  const { foodQuery } = req.body;

  try {

    const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.NUTRITIONIX_APP_ID,
        'x-app-key': process.env.NUTRITIONIX_APP_KEY,
      },
      body: JSON.stringify({
        query: foodQuery,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Error: ${JSON.stringify(errorData)}`);
    }

    const parsedData = await response.json();
    console.log('Parsed data:', parsedData);

    res.status(200).json(parsedData);
  } catch (error) {
    console.error('Error parsing issue:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getNutritionData,
};