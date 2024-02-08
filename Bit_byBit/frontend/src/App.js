import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Blogs from './pages/blogpage.js';
import { genContext } from './contexts/GeneralContext.js';
import { useAuthContext } from './hooks/useAuthContext.js'
import { LocationContext } from './contexts/LocationContext.js';
import HospitalQuery from './components/HospitalQuery.js';
import QueryResult from './components/QueryResult.js';
import NutriSearch from './components/NutriSearch.js';
import Nutrition from './components/Nutrition.js';
import Home from './pages/Home.js';
import NotFound from './pages/Notfound.js';
import BookAppointment from './pages/BookAppointment.js';
import AppointmentForm from './pages/AppointmentForm.js';
import ViewAppointments from './pages/ViewAppointments.js';
import SymptomCheckerCard from './components/SymptomCheckerCard.js';
import SymptomCheckerResult from './components/SymptomCheckerResult.js'
import Footer from './components/smallfooter.js';
import Navbar from './components/Navbar.js';

function App() {



  const [loading, setLoading] = useState(true)
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [symptoms, setSymptoms] = useState(['']);

  const { user } = useAuthContext();
  const [open, setOpen] = useState(false)
  const [Lat, setLat] = useState(null)
  const [Long, setLong] = useState(null)

  useEffect(() => {
    setLoading(false);
  }, [])
  const fetchLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);

        },
        function (error) {
          console.error("Error getting location:", error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }

  }
  const role = localStorage.getItem('role')
  const [nutri, setNutri] = useState(null);
  const [query, setQuery] = useState(null)
  const [pincode, setPincode] = useState(null)
  const setQuerytype = (query, pincode) => {
    setQuery(query);
    setPincode(pincode);
  }
  const [doctor, setDoctor] = useState('');

  return (
    <div>
      {!loading && <div className="App">
        <BrowserRouter>
          <LocationContext.Provider value={{ Lat, Long, setLat, setLong, fetchLocation }}>
            <genContext.Provider value={{ symptoms, setSymptoms, gender, setGender, yearOfBirth, setYearOfBirth, role, setDoctor, doctor, user, open, setOpen, setQuery, query, pincode, setPincode, setQuerytype, nutri, setNutri }}>

              <div className="pages">
                <Navbar />
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
                  <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
                  <Route path="/blogs" element={user ? <Blogs /> : <Navigate to='/login' />} />
                  <Route path="/genquery" element={user ? <HospitalQuery /> : <Navigate to='/login' />} />
                  <Route path="/queryres" element={user ? <QueryResult /> : <Navigate to='/login' />} />
                  <Route path='/nutrisearch' element={user ? <NutriSearch /> : <Navigate to='/login' />} />
                  <Route path='/nutrition' element={user ? <Nutrition /> : <Navigate to='/login' />} />
                  <Route path='/bookappoint' element={user ? <BookAppointment /> : <Navigate to='/login' />} />user?
                  <Route path='/appointmentform' element={user ? <AppointmentForm /> : <Navigate to='/login' />} />
                  <Route path='/viewAppointment' element={user ? <ViewAppointments /> : <Navigate to='/login' />} />
                  <Route path='/symptom' element={user ? <SymptomCheckerCard /> : <Navigate to='/login' />} />
                  <Route path='/symptomres' element={user ? <SymptomCheckerResult /> : <Navigate to='/login' />} />
                  <Route path='/' element={<Home />} />
                </Routes>
              </div>
            </genContext.Provider>
          </LocationContext.Provider>
        </BrowserRouter>
        <Footer />
      </div>}
    </div>

  );
}

export default App;