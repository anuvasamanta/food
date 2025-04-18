import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const Auth = () => {
    const isAuthToken = window.sessionStorage.getItem('tokenValue');
    return isAuthToken ? <Outlet /> : <Navigate to="/error" />
}

export default Auth