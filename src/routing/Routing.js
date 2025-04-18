import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from '../component/layout/Header'
import Home from '../component/pages/Home'
import PagenotFound from '../component/pages/PagenotFound'
import SingelItems from '../component/SubPages/SingelItems'
import About from '../component/pages/About'
import Recipies from '../component/pages/Recipies'
import Contact from '../component/pages/Contact'
import MenuItems from '../component/pages/MenuItems'
import Footer from '../component/layout/Footer'
import Booking from '../component/pages/Booking'
import SignUp from '../component/profile/SignUp'
import SignIn from '../component/profile/SignIn'
import Profile from '../component/profile/Profile'
import Error from '../component/error/Error'
import Auth from './Auth'
function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/item/:id' element={<SingelItems />} />
                <Route path='/menu' element={<MenuItems />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='profile' element={<Profile />} />
                <Route path='table' element={<Booking />} />
                {/* authentication */}
                <Route element={<Auth />}>
               
                <Route path='recipie' element={<Recipies />} />
                </Route>
                {/* error */}
                <Route path='error' element={<Error />} />
                {/* page not found */}
                <Route path='*' element={<PagenotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routing