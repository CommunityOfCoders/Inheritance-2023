import { useContext } from "react";
import { genContext } from "../contexts/GeneralContext";
import { Link } from 'react-router-dom'
import { LocationContext } from "../contexts/LocationContext";

const HospitalQuery = () => {
    const { setQuerytype, setQuery, setPincode, query, pincode } = useContext(genContext)
    const { fetchLocation } = useContext(LocationContext)

    const handleSubmit = () => {
        setQuerytype(query, pincode)
    }

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/sKhvTHc/image.png')] bg-cover bg-center min-h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="mx-auto bg-white p-8 rounded-md shadow-md w-full max-w-lg md:w-[65%]">

                    <h1 className="text-center text-5xl font-bold mb-6 text-green-800">Health Services Inquiry</h1>

                    <p className="text-gray-700 font-semibold mt-8 text-lg mb-2">Discover nearby health facilities for all your needs.</p>
                    <p className="text-gray-700 font-semibold text-lg mb-8">Explore hospitals, find trusted doctors, locate pharmacies, and more!</p>

                    <div className="mb-8">
                        <label htmlFor="services" className="block text-2xl font-bold text-gray-700 mb-4">Services:</label>
                        <select onChange={(e) => setQuery(e.target.value)} id="services" name="services" className="duration-300 p-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 w-full">
                            <option className="text-lg" value="" disabled defaultValue>Select a service</option>
                            <option className="text-lg" value="Hospitals">Hospitals</option>
                            <option className="text-lg" value="Doctors">Doctors</option>
                            <option className="text-lg" value="Pharmacies">Pharmacies</option>
                            <option className="text-lg" value="Other_Services">Other Medical Services</option>
                            <option className="text-lg" value="Blood_Banks">Blood Banks</option>
                        </select>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="areaPin" className="block text-2xl font-bold text-gray-700 mb-4">Enter Your Area PIN Code:</label>
                        <input onChange={(e) => setPincode(e.target.value)} type="text" id="areaPin" name="areaPin" className="p-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 w-full h-11" />
                    </div>

                    <Link to='/queryres'>
                        <button onClick={async () => { await fetchLocation() }} className="justify-center items-center mx-auto content-center bg-blue-500 text-lg text-white font-bold px-6 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Proceed {`-->`}
                        </button>
                    </Link>

                </form>
            </div>
        </div>
    );
}

export default HospitalQuery;
