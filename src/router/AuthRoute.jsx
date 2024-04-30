import React from 'react'
import { Navigate } from 'react-router-dom';

let AuthRoute = ({children}) => {
    if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === null) {
        // console.log('this is  auth route')
        return children
    }
    return <Navigate to='/' />
}

export default AuthRoute