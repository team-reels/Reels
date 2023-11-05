//wrapper for bio and dex + other functions
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import CatchDex from './subcomponents/CatchDex';
import dev_fish from '../assets/dev_fish.jpg';
import { FaCircleUser } from 'react-icons/fa6';
import '../styles/user.scss'
import axios from 'axios';
import { set } from 'immutable';

function User() {
	const { currentUser } = useContext(AuthContext);
	const [userData, setUserData] = useState({});
	const [loading, setLoading] = useState(true);
	const [catchData, setCatchData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.post("http://localhost:8000/user_api/get_user", {uid: currentUser.uid});

				
				if(data || data.catches) {
					const catchData = data.catches.map((catchData) => {
						return <CatchDex key={catchData} {...catchData} />;
					});
					
					setCatchData(catchData);
				}
				
				setUserData(data);
				if(!userData) throw "User not found"
				
				setLoading(false);
			} catch(e) {
				console.log(e ?? e.message);
			}
		};
		fetchData();
	}, []);

	if(loading) {
		return (
			<div className='content-container user'>
				<div className='user'>
					<div>Loading...</div>
				</div>
			</div>
		);
	}
	
  	return (
		<div className='content-container user'>
			{ 	userData ?
				<div className='user'>
					{/* if we add loadout, wrap in another container */}
					<div className='user-profile'>
						<div className='user-image'>
							
							{/* conditional for svg if no image */}
							<FaCircleUser size={55}/> 
							{/* <img src={userData.image} alt='user'></img> */}
						</div>
						<div className='user-info'>
							<div className='user-name'>{userData.username}</div>
							<div className='user-follows'>
								<span>
									Following: {userData.following}
								</span>
								<span>
									Followers: {userData.followers}
								</span>
							</div>
						</div>
						<div className='user-bio'>
							{userData.bio}
						</div>
					</div>
					<div className='user-catches'>
						{catchData}
					</div>
				</div> :
				<div>
					User Not Found
				</div>
			}
		</div>
	);
};

export default User;
