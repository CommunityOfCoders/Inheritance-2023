import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin"

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);
        setEmail('');
        setPassword('')
    }

    return (
        <div>
            <div className='transition-all w-4/5 m-auto'>
                <div className='transition-all flex justify-center items-center'>
                    <div className='transition-all max-w-auto shadow-2xl bg-white flex justify-center rounded-xl lg:rounded-l-xl lg:rounded-r-none'>
                        <div>
                            <form onSubmit={handleSubmit} className='transition-all w-[400px] h-[500px] mx-auto bg-white-400 p-8 px-8'>
                                <h2 className='transition-all text-4xl text-greeen font-bold text-center'><img src="https://i.ibb.co/sbJnjPq/healthconnect-high-resolution-logo-transparent-1.png" alt="LOGO" className="transition-all p-8" /></h2>
                                <div className='transition-all flex flex-col text-greeen py-2'>
                                    <label>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)}
                                        value={email} className='transition-all bg-gray mt-2 p-2 border-2 border-slate-300' type="email" />
                                </div>
                                <div className='transition-all flex flex-col text-greeen py-2'>
                                    <label>Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)}
                                        value={password} className='transition-all bg-gray mt-2 p-2 border-2 border-slate-300' type="password" />
                                </div>
                                <button disabled={isLoading} className='transition-all w-full my-5 py-2 bg-greeen shadow-lg rounded-lg shadow-green/50 hover:shadow-green-400/40 text-white font-semibold'>Login</button>
                                <div className="lg:hidden flex justify-end"><div className='flex text-sm'><p>New Here?</p><Link to='/signup' className='ml-4'>Signup Now!</Link></div></div>
                                {error && <div className="p-[10px] bg-[#ffefef] border border-[#e7195a] text-[#e7195a] rounded-[4px] mx-[20px] my-0">{error}</div>}
                            </form>
                        </div>
                    </div>
                    <div className="transition-all image hidden lg:block ">
                        <div className='transition-all loginimg overflow-hidden max-w-[800px] object-contain rounded-r-xl'>
                            <div className="transition-all z-10 w-[400px] h-[500px] flex justify-center items-center">
                                <div className='transition-all w-full h-full m-auto rounded-r-xl'>
                                    <div className='transition-all flex flex-col justify-center h-full bg-black bg-opacity-30 p-8 rounded-r-xl'>
                                        <div className='transition-all font-extrabold text-5xl font-body my-2  text-[#4caf50]'>New Here?</div>
                                        <div className='transition-all  text-white py-1 px-1'>
                                            Signup now and take the first step towards a healthier and happier you!
                                        </div>
                                        <Link to='/signup' className='transition-all text-center w-[25%] my-2 py-2 bg-greeen shadow-lg rounded-lg shadow-greeen/50 hover:shadow-green-400/40 text-white font-semibold'>Signup</Link>
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

export default LoginPage;