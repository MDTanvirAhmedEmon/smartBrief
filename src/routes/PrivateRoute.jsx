/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

    const user = useSelector((state) => state.logInUser)
    const { pathname } = useLocation();

    if (!user?.token) {
        return <Navigate to="/auth/login" state={{ path: pathname }}></Navigate>;
    }
    return children;
};


export default PrivateRoute;