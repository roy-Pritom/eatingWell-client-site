import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext);
    const location=useLocation();
    // console.log(location)
    if(loading)
    {
        return( <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>)
    }
    if(user)
    {
        return children
    }
    return (
       <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;