// Private Route

import {Navigate, Outlet} from 'react-router-dom';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

/** Private route wrapper
 *  If authorized, return an outlet that will render child elements
 *  If not, return element that will navigate to login page
 */

const Protected = () => {
  const {currentUser} = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to='/signin' replace={true} />;
};

export default Protected;