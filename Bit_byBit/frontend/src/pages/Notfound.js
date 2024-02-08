import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-bold mb-4 text-center">404 - Page Not Found</h2>
            <p className="text-lg mb-6 text-center">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">Back to Homepage</Link>
        </div>
    );
}

export default NotFound;