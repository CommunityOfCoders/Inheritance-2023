
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="hero sm:mt-8 bg-[url('https://source.unsplash.com/1600x900/?hospital')] bg-center bg-cover flex items-center justify-center relative height-100px">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-center z-10">
                    <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4">Connect with Your Health</h1>
                    <p className="text-lg lg:text-xl text-white">Your path to a healthier lifestyle starts here</p>
                    <br />
                    {!user && <Link to="/login" className="login-btn mt-8 rounded-full hover:bg-green-600 font-bold uppercase tracking-wide py-3 px-6 text-lg">Login</Link>}
                </div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto py-12">
                <h2 className="text-4xl font-extrabold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-green-400 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                        <h3 className="text-xl font-bold mb-2">
                            <Link to="/nutrisearch" className="hover:underline">Nutrition Analyzer</Link>
                        </h3>
                        <p>Nutrients in the food that you have had.</p>
                    </div>

                    <div className="bg-green-400 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                        <h3 className="text-xl font-bold mb-2">
                            <Link to="/genquery" className="hover:underline">Nearby Hospitals</Link>
                        </h3>
                        <p>Discover Nearby Hospitals.</p>
                    </div>

                    <div className="bg-green-400 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                        <h3 className="text-xl font-bold mb-2">
                            <Link to="/bookappoint" className="hover:underline">Appointment Booking</Link>
                        </h3>
                        <p>Book online appointment with a Specialist Doctor</p>
                    </div>
                </div>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="blog-card bg-green-400 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">
                            <Link to="/blogs" className="hover:underline">Blogs</Link>
                        </h3>
                        <p>Read blogs by renowned doctors and experts on health</p>
                    </div>
                    <div className="blog-card bg-green-400 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">
                            <Link to="/symptom" className="hover:underline">Symptom Checker</Link>
                        </h3>
                        <p>Diagnose yourself just by filling a simple form</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">About Us</h3>
                        <p className="text-sm">Looking Forward to see Healthier India....</p>
                        <Link to="/aboutus" className="hover:underline">Read More...</Link>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Services</h3>
                        <ul className="list-none p-0">
                            <li><Link to="/bookappoint" className="text-lg text-gray-300 hover:text-white">Appointment Booking</Link></li>
                            <li><Link to="/blogs" className="text-lg text-gray-300 hover:text-white">Blogs</Link></li>
                            <li><Link to="/genquery" className="text-lg text-gray-300 hover:text-white">Nearest Hospitals</Link></li>
                            <li><Link to="/nutrisearch" className="text-lg text-gray-300 hover:text-white">Nutrition Content</Link></li>
                            <li><Link to="/symptom" className="text-lg text-gray-300 hover:text-white">Symptom Checker</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p className="text-sm">Get in touch with us for any inquiries or feedback.</p>
                        <Link to="/aboutus" className="text-blue-500 hover:underline">About Us</Link>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm">&copy; 2024 Your HealthConnect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
