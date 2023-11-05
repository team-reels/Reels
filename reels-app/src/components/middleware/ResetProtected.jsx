import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

/** Reset Protected route wrapper
 *  Users that have not requested to remember pw should not be able to access pw
 */

const ResetProtected = () => {
    console.log('hi')
	const [searchParams, setSearchParams] = useSearchParams();
    const oobCode = searchParams.get('oobCode');
    console.log(searchParams)
    console.log(oobCode);
    // TODO: VALIDATE OOB CODE 

    return oobCode ? <Outlet /> : <Navigate to='/signin' replace={true} />;
};

export default ResetProtected;