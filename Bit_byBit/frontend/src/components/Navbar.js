import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => {

    const { user } = useContext(AuthContext);
    const { logout } = useLogout();


    const handleLogout = async () => {
        await logout();
    }

    return (
        <div>
            <nav className="navbar-desktop navbar flex items-center justify-center sm:justify-between py-3 px-5">
                <div>
                    <Link to="/" className="text-lg font-bold"><img className="w-[300px]" src="https://i.ibb.co/k4TTFxs/healthconnect-high-resolution-logo-transparent-3.png" alt="" /></Link>
                </div>
                <div className="hidden sm:flex sm:justify-flex sm:items-center">
                    <div className="flex cursor-pointer justify-center items-center">
                        <img className="invert mr-1" src="https://i.ibb.co/BVYRTH6/image.png" alt="" />
                        <Link to="/" className="text-lg font-extrabold mr-6 border-b border-transparent hover:border-b hover:border-white text-white">Home</Link>
                    </div>
                    <div className="flex cursor-pointer justify-center items-center">
                        <img className="invert w-[20px] mr-1" src="https://i.ibb.co/fGWzVcv/image.png" alt="" />
                        <Link to="/viewAppointment" className="text-lg font-extrabold mr-4 border-b border-transparent hover:border-b hover:border-white text-white">View Appointments</Link>
                    </div>
                    {user && <div className="flex cursor-pointer justify-center items-center"><img className="invert" src="https://i.ibb.co/fDL2s6t/image.png"></img> <button onClick={handleLogout} className="text-lg font-extrabold mr-4 border-b border-transparent hover:border-b hover:border-white text-white ml-2">Logout</button></div>}
                </div>
            </nav>
            <div className="dropdown-menu flex justify-center items-center sm:hidden bg-white">
                <div className="flex justify-center items-center">
                    <img className="-mr-1" src="https://i.ibb.co/BVYRTH6/image.png" alt="" />
                    <div className="dropdown-item"><Link to="/" className="text-sm border-b border-transparent hover:border-b hover:border-slate-700 text-center font-extrabold mr-2 text-gray-700 block">Home</Link></div>
                </div>
                <div className="flex cursor-pointer justify-center items-center">
                        <img className=" w-[20px] mr-1" src="https://i.ibb.co/fGWzVcv/image.png" alt="" />
                        <Link to="/viewAppointment" className="text-sm font-extrabold mr-4 text-gray-700 border-b border-transparent hover:border-b hover:border-slate-700">Appointments</Link>
                    </div>
                <div>{user && <div className="flex cursor-pointer justify-center items-center"><img className="" src="https://i.ibb.co/fDL2s6t/image.png"></img> <button onClick={handleLogout} className="text-sm text-center font-extrabold text-gray-700 block border-b border-transparent hover:border-b hover:border-slate-700">Logout</button></div>}</div>

            </div>
        </div>
    );
}

export default Navbar;