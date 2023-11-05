import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <header className='nav'>
        <Link to='/'>
            <h1>Reels</h1> {/* replace with svg? */}
        </Link>
        <Link to='/user'>
            <FaCircleUser size={30}/>
        </Link>
    </header>
  );
};

export default App;
