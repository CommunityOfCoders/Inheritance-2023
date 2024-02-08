import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAppointments = () => {
  const [list, setList] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;
  const role = user.role;

  const getAppointmentData = () => {
    const userrole = role;

    axios
      .get("/appointmentinfo/getappointments", {
        params: {
          username: username,
          userrole: userrole,
        },
      })
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAppointmentData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded my-6 overflow-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Your Appointments</h1>
        {list && list.length === 0 ? (
          <p className="text-center text-red-500">You don't have any Appointments for now!</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">#</th>
                <th className="py-3 px-6 text-center">Issue</th>
                <th className="py-3 px-6 text-center">Patient's Name</th>
                <th className="py-3 px-6 text-center">Doctor's Name</th>
                <th className="py-3 px-6 text-center">Date</th>
                <th className="py-3 px-6 text-center">Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {list &&
                list.map((appoint, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-center">{index + 1}</td>
                    <td className="py-3 px-6 text-center">{appoint.Name}</td>
                    <td className="py-3 px-6 text-center">{appoint.PName}</td>
                    <td className="py-3 px-6 text-center">{appoint.Drname}</td>
                    <td className="py-3 px-6 text-center">{appoint.date.slice(0, 10)}</td>
                    <td className="py-3 px-6 text-center">{appoint.slot}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewAppointments;
