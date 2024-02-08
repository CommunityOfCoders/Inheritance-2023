import { useContext, useEffect, useState } from 'react';
import { genContext } from '../contexts/GeneralContext';

const Nutrition = () => {
  const { nutri } = useContext(genContext);
  const [nutrientData, setNutrientData] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [servingInfo, setServingInfo] = useState('');

  const updateNutrientData = (foodData) => {
    const updatedNutrientData = [
      { nutrient: 'Calories', value: `${foodData.nf_calories}g`, dailyLimit: 'Varies (1,600 to 3,000 kcal)' },
      { nutrient: 'Total Fat', value: `${foodData.nf_total_fat}g`, dailyLimit: 'Less than 70g' },
      { nutrient: 'Saturated Fat', value: `${foodData.nf_saturated_fat}g`, dailyLimit: 'Less than 22g' },
      { nutrient: 'Cholesterol', value: `${foodData.nf_cholesterol}mg`, dailyLimit: 'Less than 300mg' },
      { nutrient: 'Sodium', value: `${foodData.nf_sodium}mg`, dailyLimit: 'Less than 2,300mg (ideal: 1,500mg)' },
      { nutrient: 'Total Carbohydrate', value: `${foodData.nf_total_carbohydrate}g`, dailyLimit: 'Varies (45% to 65% of total calories)' },
      { nutrient: 'Dietary Fiber', value: `${foodData.nf_dietary_fiber}g`, dailyLimit: '25g (women) / 38g (men)' },
      { nutrient: 'Sugars', value: `${foodData.nf_sugars}g`, dailyLimit: 'Less than 25g (women) / 38g (men)' },
      { nutrient: 'Protein', value: `${foodData.nf_protein}g`, dailyLimit: 'Varies based on individual needs' },
      { nutrient: 'Potassium', value: `${foodData.nf_potassium}mg`, dailyLimit: 'Varies' },
      { nutrient: 'Phosphorus', value: `${foodData.nf_p}mg`, dailyLimit: 'Varies' },
    ];

    setNutrientData(updatedNutrientData);
    setFoodName(foodData.food_name.charAt(0).toUpperCase() + foodData.food_name.slice(1));
    setServingInfo(`${foodData.serving_qty} ${foodData.serving_unit}`);
  };

  useEffect(() => {
    if (nutri) {
      const fetchNutrition = async () => {
        const send = { foodQuery: nutri };
        try {
          const response1 = await fetch('/api/nutrition/', {
            method: 'POST',
            body: JSON.stringify(send),
            headers: {
              'Content-Type': 'application/json'
            },
          });
          if (!response1.ok) {
            throw new Error(`HTTP error! Status: ${response1.status}`);
          }

          const json1 = await response1.json();
          // console.log(json1);

          if (json1 && json1.foods && json1.foods.length > 0) {
            const foodData = json1.foods[0];
            updateNutrientData(foodData);
          } else {
            console.error('Invalid response data:', json1);
          }

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchNutrition();
    }

  }, [nutri]);

  return (
    <div className="bg-[url('https://images.pexels.com/photos/4021870/pexels-photo-4021870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-no-repeat min-h-screen">
      <div className="bg-transparent min-h-screen flex flex-col items-center justify-center">
        {nutrientData.length === 0 ? (<div className='font-bold text-2xl'>Loading...</div>) : (
          <div className="bg-white mt-8 w-full md:w-3/4 shadow-lg rounded-md p-8 mb-6 overflow-x-auto">
            <h1 className="text-4xl font-bold mb-2 text-center">{foodName}</h1>
            <p className="text-lg mb-4 text-center text-green">Serving Quantity: {servingInfo}</p>

            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/3 py-2 px-4 border">Nutrient</th>
                  <th className="w-1/3 py-2 px-4 border">Value</th>
                  <th className="w-1/3 py-2 px-4 border">Daily Intake Limit</th>
                </tr>
              </thead>
              <tbody>
                {nutrientData && nutrientData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="w-1/3 py-2 px-4 border">{item.nutrient}</td>
                    <td className="w-1/3 py-2 px-4 border">{item.value}</td>
                    <td className="w-1/3 py-2 px-4 border">{item.dailyLimit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default Nutrition;
