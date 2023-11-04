import { useState } from 'react';
import TextField from "@mui/material/TextField";
import { FaCircleUser } from 'react-icons/fa6';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='nav'>
        <h1>Reels</h1> {/* replace with svg? */}
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <FaCircleUser />
    </div>
  );
};

export default App;
