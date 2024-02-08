import { React, useState, useEffect } from 'react'
import GoogleIcon from '../assets/icons/google.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAuth from '../hooks/useAuth'
import axiosClient from '../api/axiosClient'
import Logo from '../assets/images/icon.png'
// Yup schema for validation.
const schema = yup
  .object()
  .shape({
    name: yup.string().required('Name please.'),
    email: yup
      .string()
      .email('Email must be valid.')
      .required('Email is required.'),
    password: yup
      .string()
      .min(4, 'Password must be atleast 4 characters.')
      .max(15, 'Password must be atmost 15 characters')
      .required('Password is required.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password Mismatch'),
  })
  .required()

// Signup Page.
const Signup = () => {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth()
  const [errMsg, setErrMsg] = useState('')

  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // No Access when logged in.
  useEffect(() => {
    if (auth) navigate('/')
  }, [auth])

  // use Form.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // Submit Form Handler.
  const submitForm = async (data, e) => {
    e.preventDefault()

    const config = {
      email: data.email,
      name: data.name,
      password: data.password,
    }

    // Regitser in the user.
    await axiosClient
      .post('/api/v1/auth/register', config)
      .then((resp) => {
        if (resp?.status === 201) {
          // Logged In Successfully.
          setErrMsg('')
          setAuth(true)
          navigate(from, { replace: true })
        } else {
          setErrMsg('You were unable to register into the system')
        }
      })
      .catch((error) => {
        if (error.code === 'ERR_BAD_REQUEST') {
          setErrMsg('Please provide valid email or change it.')
        } else {
          setErrMsg('Something went wrong ' + error)
        }
      })
  }

  return (
    <section className="py-14 flex items-center justify-center">
      <div className="mt-6 space-y-0 bg-white shadow-2xl shadow-black rounded-2xl max-lg:flex-col max-lg:space-y-8">
        <div className="flex flex-col justify-center p-4 px-8 max-lg:p-8">
          {/* Top Text. */}
          <div className="flex justify-around">
            <span className="mb-3 text-4xl font-bold pt-4">Welcome to</span>
            <span >
              <img src={Logo} alt="Logo" className="center mt-6 h-16" />
            </span>
          </div>

          {/* Form. */}
          <form onSubmit={handleSubmit(submitForm)}>
            {/* Name. */}
            <div className="py-2">
              <label className="mb-2 text-md">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                {...register('name')}
                placeholder="John Doe"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
              {/* Error. */}
              <p className="text-red-600"> {errors.name?.message} </p>
            </div>

            {/* Email. */}
            <div className="py-2">
              <label className="mb-2 text-md">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                {...register('email')}
                placeholder="john@example.com"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
              {/* Error. */}
              <p className="text-red-600"> {errors.email?.message} </p>
            </div>

            {/* Password. */}
            <div className="py-2">
              <label className="mb-2 text-md">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                {...register('password')}
                placeholder="john"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
              <p className="text-red-600"> {errors.password?.message} </p>
            </div>

            {/* Confirm Password. */}
            <div className="py-2">
              <label className="mb-2 text-md">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                {...register('confirmPassword')}
                placeholder="Can't Say"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
              {/* Error. */}
              <p className="text-red-600">
                {' '}
                {errors.confirmPassword?.message}{' '}
              </p>
            </div>

            {/* Submit. */}
            <button
              type="submit"
              id="submit"
              className="w-full mt-4 bg-black text-white p-2 rounded-lg mb-4 hover:bg-white hover:text-black hover:border-black hover:border-2"
            >
              Sign Up
            </button>

            {/* Google Login. */}
            <button className="w-full border border-black text-md p-2 rounded-lg mb-2 bg-black text-white hover:bg-white hover:text-black hover:border-2">
              <img src={GoogleIcon} alt="img" className="w-6 h-6 inline mr-2" />
              Sign Up with Google
            </button>
          </form>

          {/* Rmember And Login Link. */}
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>

            {/* Link */}
            <div className="text-center">
              <Link
                to={'/login'}
                className="font-bold text-black ml-2 underline hover:translate-x-2"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Error Message. */}
          {errMsg ? (
            <div className="red mt-3">
              <p>{errMsg}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Signup
