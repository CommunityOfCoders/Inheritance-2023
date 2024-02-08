import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { genContext } from "../contexts/GeneralContext";

const BookAppointment = () => {
  const [userlist, setUserlist] = useState([]);
  const [filter, setFilter] = useState("");
  const { setDoctor } = useContext(genContext);

  const getusers = async () => {
    const params = filter ? { expertise: filter } : {};
    try {
      const response = await axios.get("/appointmentinfo/getDoctors", { params });
      setUserlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleclick = (a) => {
    setDoctor(a);
  }

  useEffect(() => {
    getusers();
  }, [filter]);

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
      <div className="bg-white w-full max-w-6xl p-8 rounded-xl shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Expertise:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select Expertise</option>
            <option value="">All</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Oncology">Oncology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Physician">Physician</option>
          </select>
        </div>

        {userlist && userlist.length === 0 ? (
          <p className="text-red-500">Sorry, Doctors are currently unavailable!</p>
        ) : (
          <div className="bg-white overflow-x-auto">
            <h4 className="text-center text-xl font-bold mb-4">List of Doctors</h4>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">S.No</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Contact</th>
                  <th className="py-2 px-4">Expertise</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {userlist.map((singleuser, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{singleuser.username}</td>
                    <td className="py-2 px-4">{singleuser.email}</td>
                    <td className="py-2 px-4">{singleuser.contact}</td>
                    <td className="py-2 px-4">{singleuser.expertise}</td>
                    <td className="py-2 px-4">

                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); handleclick(singleuser.username) }}
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-full"
                      ><Link className="w-full h-full" to="/appointmentform">
                          Consult
                        </Link>
                      </button>
                    </td>
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

export default BookAppointment;
