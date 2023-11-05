import { useEffect, useContext, useState } from 'react';
import { FaCircleUser, FaPlus} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';
import { AuthContext } from '../contexts/AuthContext';
import { getAuth } from 'firebase/auth';


function App() {

const { currentUser } = useContext(AuthContext)
	return (
		<header className='nav'>
			<Link to='/'>
				<h1>Reels</h1> {/* replace with svg? */}
			</Link>

			{/* {  	currentUser 
				? 
				<div>
				<Link to='/add'><FaPlus size={30}/></Link> 
				<Link to='/user'><FaCircleUser size={30}/></Link>
				</div>
				: <Link to='/user'><FaCircleUser size={30}/></Link>
			} */}
			<div className='right-nav'>
			<Link to='/add'><FaPlus size={30}/></Link> 
			<Link to='/user'><FaCircleUser size={30}/></Link>
			</div>

		</header>
	);
};

export default App;
