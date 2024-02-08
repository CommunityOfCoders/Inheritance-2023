import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from "../hooks/useSignup"

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [role, setrole] = useState('');
    const [expertise, setexpertise] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password, username, role, expertise, contact);
        setEmail('');
        setPassword('');
        setexpertise('');
        setContact('');
        setUsername('')
        setrole('');
    }

    return (
        <div>
            <div className='transition-all w-4/5 m-auto'>
                <div className='transition-all flex justify-center items-center'>
                    <div className='transition-all max-w-auto shadow-2xl bg-white flex justify-center rounded-xl lg:rounded-l-xl lg:rounded-r-none'>
                        <div>
                            <form onSubmit={handleSubmit} className='transition-all w-[400px] h-[500px] mx-auto bg-white-400 p-8 px-8'>
                                <h2 className='transition-all text-4xl py-0.1 text-greeen font-bold text-center'>
                                    <img src="https://i.ibb.co/sbJnjPq/healthconnect-high-resolution-logo-transparent-1.png" alt="LOGO" className="transition-all p-2" />
                                </h2>
                                <div className='transition-all flex flex-col text-greeen py-1'>
                                    <label className='text-sm'>Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className='transition-all bg-gray mt-1 p-1.5 text-sm border-2 border-slate-300'
                                        type="email"
                                    />
                                </div>
                                <div className='transition-all flex flex-col text-greeen py-0.1'>
                                    <label className='text-sm'>User Name</label>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        className='transition-all bg-gray mt-1 p-1.5 text-sm border-2 border-slate-300'
                                        type="text"
                                    />
                                </div>
                                <div className='transition-all flex flex-col text-greeen py-0.1'>
                                    <label className='text-sm'>Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        className='transition-all bg-gray mt-1 p-1.5 text-sm border-2 border-slate-300'
                                        type="password"
                                    />
                                </div>
                                <div className='transition-all flex flex-col text-greeen py-0.1'>
                                    <label className='text-sm'>Contact</label>
                                    <input
                                        onChange={(e) => setContact(e.target.value)}
                                        value={contact}
                                        className='transition-all bg-gray mt-1 p-1.5 text-sm border-2 border-slate-300'
                                        type="text"
                                    />
                                </div>
                                <div className='transition-all flex flex-row justify-between'>
                                    <div className='transition-all flex flex-col text-greeen py-0.1 w-[45%]'>
                                        <label className='text-sm'>Role</label>
                                        <select
                                            className='transition-all bg-gray mt-1 p-1.5 text-sm border-2 border-slate-300'
                                            value={role}
                                            onChange={(e) => setrole(e.target.value)}
                                        >
                                            <option value="" disabled>Select Role</option>
                                            <option value="Patient">Patient</option>
                                            <option value="Doctor">Doctor</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className='transition-all flex flex-col text-greeen py-0.1 w-[45%]'>
                                        <label className='text-sm'>Expertise</label>
                                        <select
                                            className='transition-all bg-gray mt-1 p-1.5 text-sm border-2 border-slate-300'
                                            value={expertise}
                                            onChange={(e) => setexpertise(e.target.value)}
                                        >
                                            <option value="" disabled>Select Expertise</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Oncology">Oncology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                            <option value="Pediatrics">Pediatrics</option>
                                            <option value="Physician">Physician</option>
                                            <option value="N/A">N/A</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                </div>
                                <button disabled={isLoading} className='transition-all w-full my-5 py-1 bg-greeen shadow-lg rounded-lg shadow-green/50 hover:shadow-green-400/40 text-white font-semibold'>SIGNUP</button>
                                <div className="lg:hidden flex justify-end">
                                    <div className='flex text-sm'>
                                        <p>Already a Member?</p>
                                        <Link to='/login' className='ml-4'>LOGIN!</Link>
                                    </div>
                                </div>
                                {error && <div className="p-[10px] bg-[#ffefef] border border-[#e7195a] text-[#e7195a] rounded-[4px] mx-[20px] my-0">{error}</div>}
                            </form>
                        </div>
                    </div>
                    <div className="transition-all image hidden lg:block ">
                        <div className='transition-all loginimg overflow-hidden max-w-[800px] object-contain rounded-r-xl'>
                            <div className="transition-all z-10 w-[400px] h-[500px] flex justify-center items-center">
                                <div className='transition-all w-full h-full m-auto rounded-r-xl'>
                                    <div className='transition-all flex flex-col justify-center h-full bg-black bg-opacity-30 p-8 rounded-r-xl'>
                                        <div className='transition-all font-extrabold font-body text-5xl my-2 text-green-300'>Already a member?</div>
                                        <div className='transition-all text-white py-1 px-1'>
                                            Login now and take the first step towards a healthier and happier you!
                                        </div>
                                        <Link to='/login' className='transition-all text-center w-[25%] my-2 py-2 bg-greeen shadow-lg rounded-lg shadow-greeen/50 hover:shadow-green-400/40 text-white font-semibold'>LOGIN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
