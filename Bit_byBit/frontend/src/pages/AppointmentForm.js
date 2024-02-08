import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { genContext } from "../contexts/GeneralContext";


const AppointmentForm = () => {
    const { doctor } = useContext(genContext);
    const user = JSON.parse(localStorage.getItem('user'))

    const [issue, setIssue] = useState("");
    const [date, setDate] = useState("");
    const [Time, setTime] = useState("9:00 Am to 12:00 Pm");
    const [patientName] = useState(user.username);
    const [DrName] = useState(doctor);

    useEffect(() => { }, [user])
    const submitHandler = (e) => {
        e.preventDefault();
        const appointData = {
            Name: issue,
            date: new Date(date).toISOString(),  // Convert date to ISO string
            time: Time,
            PName: patientName,
            Drname: DrName,
        };

        axios.post("/appointmentinfo/appointmentData", appointData)
            .then((res) => {
                console.log(res.data);
                alert("Appointment scheduled");
                window.location.href = "/viewappointment"
            })
            .catch((err) => console.log(err));

        setIssue("");
        setDate("");
        setTime("");
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h3 className="text-3xl font-bold mb-6">Book Appointment</h3>
                <p className="text-gray-500 text-sm mb-6">
                    Patient: {user.username} | Doctor: {doctor}
                </p>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label
                            htmlFor="issue"
                            className="block text-sm font-medium text-gray-600"
                            placeholder="Your ISsue"
                        >
                            Issue
                        </label>
                        <input
                            type="text"
                            id="issue"
                            name="issue"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="Time"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Slots
                        </label>
                        <select
                            id="Time"
                            name="Time"
                            value={Time}
                            onChange={(e) => setTime(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        >
                            <option value="9:00 Am to 12:00 Pm">9:00 Am to 12:00 Pm</option>
                            <option value="2:00 Pm to 5:00 Pm">2:00 Pm to 5:00 Pm</option>
                            <option value="6:00 Pm to 9:00 Pm">6:00 Pm to 9:00 Pm</option>
                        </select>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring focus:border-cyan-300"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;
