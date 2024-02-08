import { useState } from 'react'
import { navLinks } from '../constants'
import HamburgerIcon from '../assets/icons/hamburger.png'
import CloseIcon from '../assets/icons/close.png'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'
import axiosClient from '../api/axiosClient'
import Modal from './Modal'
import Logo from '../assets/images/icon.png'

const Nav = () => {
  const [sidebar, setSideBar] = useState(false)
  const [showLinkModal, setShowLinkModal] = useState(false)

  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  // Logout functionality.
  const logoutHandler = async (e) => {
    e.preventDefault()
    setAuth(false)

    await axiosClient.get('/api/v1/auth/logout')
    navigate('/login')
  }

  useEffect(() => {}, [auth])

  return (
    <>
      {/* Main Navbar */}
      <header className="absolute padding-x h-14 py-2 w-full text-white backdrop-blur-md">
        <nav className="flex justify-between items-center max-container">
          {/* Logo */}
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              width={103}
              height={40}
              className="m-0 object-cover bg-transparent"
            />
          </a>

          {/* After 1024px, It is hidden */}
          <ul className="flex-1 flex justify-center items-center gap-12 h-full max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label} className="h-12">
                <Link
                  to={item.href}
                  className="flex items-center font-montserrat leading-normal text-lg px-2 rounded-sm h-full hover:underline hover:underline-offset-4 hover:decoration-[#4986d6] hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login And SignUp Buttons. */}
          {auth ? (
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
              <button
                className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1"
                onClick={logoutHandler}
              >
                <Link>Logout</Link>
              </button>
              <button
                className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1"
                onClick={() => setShowLinkModal(true)}
              >
                <Link>Add Link</Link>
              </button>
            </div>
          ) : (
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
              <button className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1">
                <Link to={'/signup'}>Sign Up</Link>
              </button>
              <button className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1">
                <Link to={'/login'}>Login</Link>
              </button>
            </div>
          )}

          {/* Hamburger Icon. */}
          <button
            className="hidden max-lg:block text-white"
            onClick={() => setSideBar(!sidebar)}
          >
            <img
              src={HamburgerIcon}
              alt="hamburger icon"
              width={25}
              height={25}
            />
          </button>
        </nav>
      </header>

      {/* Sidebar Setup. */}
      {sidebar && (
        <ul className="fixed z-10 top-0 right-0 w-52 hidden flex-col justify-start items-start gap-4 h-full pt-3 px-2 backdrop-blur-md max-lg:flex">
          {/* Cross Button. */}
          <button
            className="hidden max-lg:block"
            onClick={() => setSideBar(!sidebar)}
          >
            <img src={CloseIcon} alt="x" width={30} height={30} />
          </button>

          {/* Items. */}
          {navLinks.map((item) => (
            <li key={item.label} className="w-full">
              <Link
                to={item.href}
                className="flex items-center font-montserrat leading-normal text-lg px-2 py-1 rounded-sm w-full hover:bg-[#4986d6] hover:underline hover:underline-offset-4 hover:decoration-[#4986d6] hover:translate-x-1"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Login And SignUp Buttons. */}
          {auth ? (
            <div className="flex flex-col gap-2 text-lg leading-normal font-medium font-montserrat">
              <button
                className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1"
                onClick={logoutHandler}
              >
                <Link>Logout</Link>
              </button>
              <button
                className="border-[#4986d6] border-2 px-3 mt-2 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1"
                onClick={() => setShowLinkModal(true)}
              >
                <Link>Add Link</Link>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 text-lg leading-normal font-medium font-montserrat">
              <button className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1">
                <Link to={'/signup'}>Sign Up</Link>
              </button>

              <button className="border-[#4986d6] border-2 px-3 rounded-lg py-1 shadow-lg shadow-[#4986d6] hover:bg-[#4986d6] hover:translate-x-1">
                <Link to={'/login'}>Login</Link>
              </button>
            </div>
          )}
        </ul>
      )}

      {/* Add Link Modal */}
      <Modal isOpen={showLinkModal} onClose={() => setShowLinkModal(false)} />
    </>
  )
}

export default Nav
