import { useState, useContext } from 'react';
import { FaCircleUser, FaPlus} from 'react-icons/fa6';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

function App() {

const { currentUser } = useContext(AuthContext)
	return (
		<header className='nav'>
			<Link to='/'>
				<h1>Reels</h1> {/* replace with svg? */}
			</Link>

			{  	currentUser 
				? 
				<div>
				<Link to='/add'><FaPlus size={30}/></Link> 
				<Link to='/user'><FaCircleUser size={30}/></Link>
				</div>
				: <Link to='/user'><FaCircleUser size={30}/></Link>
			}


		</header>
	);
};

export default App;
