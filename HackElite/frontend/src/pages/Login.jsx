import { React, useEffect, useState } from 'react'
import GoogleIcon from '../assets/icons/google.svg'
import Image from '../assets/images/logo.png'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAuth from '../hooks/useAuth'
import axiosClient from '../api/axiosClient'

// Yup schema for validation.
const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Enter valid email.')
      .required('Email is required.'),
    password: yup
      .string()
      .min(4, 'Password must be atleast 4 characters.')
      .max(15, 'Password must be atmost 15 characters')
      .required('Password must be present.'),
  })
  .required()

// Login Page
const Login = () => {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth()
  const [errMsg, setErrMsg] = useState('')

  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // No Access when logged In.
  useEffect(() => {
    if (auth) navigate('/')
  }, [auth])

  // use Form.
  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // Submit Form Handler.
  const submitForm = async (data, e) => {
    e.preventDefault()

    try {
      const config = {
        email: data.email,
        password: data.password,
      }

      // Logging in the user.
      const resp = await axiosClient.post('/api/v1/auth/login', config)
      data = resp.data

      if (resp?.status === 200) {
        // Logged In Successfully.
        setErrMsg('')
        setAuth(true)
        navigate(from, { replace: true })
      } else {
        setErrMsg('You were unable to login into the system')
      }
    } catch (error) {
      setErrMsg('Invalid Credentials')
    }
  }

  return (
    <section className="xl:padding-l wide:padding-r py-14">
      <div className="flex items-center justify-center">
        <div className="flex mt-6 space-y-0 bg-white shadow-2xl shadow-black rounded-2xl max-lg:flex-col max-lg:space-y-8">
          {/* Left Side. */}
          <div className="flex flex-col justify-center p-4 px-8 max-lg:p-8">
            {/* Top Text */}
            <span className="mb-2 text-4xl font-bold">Welcome back</span>
            <span className="font-light text-gray-400 mb-2">
              Welcome back! Please enter your details
            </span>

            {/* Login Form. */}
            <form onSubmit={handleSubmit(submitForm)}>
              {/* Email. */}
              <div className="py-2">
                <label className="mb-2 text-md">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  {...login('email')}
                  placeholder="johndoe@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
                {/* Error */}
                <p className="text-red-600"> {errors.email?.message} </p>
              </div>

              {/* Password. */}
              <div className="py-2">
                <label className="mb-2 text-md">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...login('password')}
                  placeholder="************"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
                {/* Error */}
                <p className="text-red-600"> {errors.password?.message} </p>
              </div>

              {/* Login In. */}
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-lg mb-3 mt-4 hover:bg-white hover:text-black hover:border-black hover:border-2"
              >
                Login
              </button>
            </form>

            {/* Google Login. */}
            <button className="w-full border border-black text-md p-2 rounded-lg mb-2 bg-black text-white hover:bg-white hover:text-black hover:border-2">
              <img src={GoogleIcon} alt="img" className="w-6 h-6 inline mr-2" />
              Sign in with Google
            </button>

            {/* Remember and Forget Password. */}
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md">Forgot password</span>
            </div>

            {/* Sign Up Link. */}
            <div className="text-center text-gray-400">
              Dont'have an account?
              <Link
                to={'/signup'}
                className="font-bold text-black ml-2 underline hover:translate-x-2"
              >
                Sign Up
              </Link>
            </div>

            {/* Error Message. */}
            {errMsg ? (
              <div className="text-red-700 mt-3">
                <p>{errMsg}</p>
              </div>
            ) : null}
          </div>

          {/* Right Side. */}
          <div className="relative w-[400px]">
            <img
              src={Image}
              alt="img"
              className="mt-16 h-70 block rounded-r-2xl max-lg:hidden object-cover"
            />
            {/* Text on Image.  */}
            <div className="absolute block bottom-10 right-6 p-6 bg-black bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg max-lg:hidden">
              <span className="text-white text-xl">
                Why waste time watching Youtube?
                <br />
                Get summary and screenshots. <br />
                Imagine having more time to spend!"
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
