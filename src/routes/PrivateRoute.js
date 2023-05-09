import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({component: Component}) {
  const signedUp = useSelector((state) => state.userManagementReducer.signedUp); 
  return (
    signedUp ? <Component /> : <Navigate to='/signup'/> 
  );
};

export default PrivateRoute