import { createContext, useState } from 'react'
import Cookies from 'js-cookie'

// useContext for managing the state of authenticated users.
const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(Cookies.get('token') ? true : false)
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
