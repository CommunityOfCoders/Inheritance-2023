import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { genContext } from '../contexts/GeneralContext';

const NutriSearch = () => {
  const { setNutri } = useContext(genContext);

  const handleInputChange = (e) => {
    setNutri(e.target.value);
  };

  return (
    <div style={{ backgroundImage: 'url("https://source.unsplash.com/1920x1080/?food")' }} className="bg-cover bg-no-repeat min-h-screen bg-gray-100">

      <div className="flex sm:pt-11 items-center justify-center bg-cover bg-center bg-no-repeat" >
        <div className="w-11/12 py-[100px] md:w-3/4 mt-8 bg-gray-600 opacity-90 p-8 rounded-lg shadow-lg text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nutrients present in the Food :)</h1>
          <p className="text-base md:text-lg mb-6">
            Choosing a diet filled with vibrant fruits, veggies, whole grains, and lean proteins is a key to a healthy body and mind. Dive into nutrient-packed salads, hearty soups, and energizing snacks like nuts and seeds. Keep the hydration game strong with water and herbal teas. Mindfully enjoying each meal creates a balanced connection with food, enhancing our well-being. Every smart food choice is a nod to our bodies, giving them the fuel they need to flourish.
          </p>

          <form className="mb-4">
            <label htmlFor="food" className="block text-sm md:text-xl text-gray-300 font-bold mb-2">Enter the Food about which You would like to know:</label>
            <input
              onChange={handleInputChange}
              type="text"
              id="food"
              name="food"
              className="w-full text-slate-600 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="E.g., Avocado Toast"
            />
            <Link to="/nutrition">
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-white"
              >
                Feed Me Info!
              </button>
            </Link>
          </form>

          <p className="text-xs md:text-sm text-gray-200">We loved to hear about your food choice!</p>
        </div>
      </div>
    </div>
  );
};

export default NutriSearch;
