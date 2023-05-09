import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({component: Component, restricted}) {
  const signedUp = useSelector((state) => state.userManagementReducer.signedUp)
  let publicCondition =  signedUp && restricted
  return ( 
    publicCondition ? <Navigate to='/home' /> : <Component  />
  );
};

export default PublicRoute;