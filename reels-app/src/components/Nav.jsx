import { useEffect, useContext, useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';
import { AuthContext } from '../contexts/AuthContext';
import { getAuth } from 'firebase/auth';


function App() {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <header className='nav'>
        <Link to='/'>
            <h1>Reels</h1> {/* replace with svg? */}
        </Link>
        <Link to={currentUser ? `/u/${currentUser.uid}` : '/signin'}>
            <FaCircleUser size={30}/>
        </Link>
    </header>
  );
};

export default App;
