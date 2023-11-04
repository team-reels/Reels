import { useState } from 'react';
import TextField from "@mui/material/TextField";
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
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Link to='/user'>
            <FaCircleUser size={45}/>
        </Link>
    </header>
  );
};

export default App;
