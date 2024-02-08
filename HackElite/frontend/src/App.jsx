import '@fortawesome/fontawesome-free/css/all.min.css'
import { Nav } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RequiredAuth from './components/RequiredAuth'

function App() {
  return (
    // React Router Setup
    <Router>
      {/* Navbar */}
      <Nav />
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Sign Up */}
        <Route path="/signup" element={<Signup />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        <Route element={<RequiredAuth />}>
          {/* Home */}
          <Route path="/" element={<Home />} />
        </Route>

        {/* Error Page */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  )
}

export default App
