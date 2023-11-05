import { useEffect, useContext, useState } from 'react';
import { FaCircleUser, FaPlus} from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/nav.scss';
import { AuthContext } from '../contexts/AuthContext';
import { logout } from '../api/auth';


function App() {
	const { currentUser } = useContext(AuthContext)
	const navigate = useNavigate();

	const doLogOut = () => {
		logout();
		navigate('/signin');
	}
	
	return (
		<header className='nav'>
			<Link to='/'>
				<h1>Reels</h1> {/* replace with svg? */}
			</Link>
			{	currentUser 
				? 	<div className='nav-right'>
						<Link to='/add'><FaPlus size={30}/></Link> 
						
						<div className='nav-user'>
							<Link to={`/u/${currentUser.uid}`}>
								<FaCircleUser size={30}/>
							</Link>
							<a onClick={doLogOut}>Logout</a>
						</div>
					</div>
				: 	<Link to={'/signin'}>
						<FaCircleUser size={30}/>
					</Link>
			}
		</header>
	);
};

export default App;
