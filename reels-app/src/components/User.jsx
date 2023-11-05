//wrapper for bio and dex + other functions
import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import CatchDex from './subcomponents/CatchDex';
import useAxios from '../hooks/useAxios';
import dev_fish from '../assets/dev_fish.jpg';

function User() {
	// create link by auth?
	// const { userData } = useAxios('link');
	const [catchData, setCatchData] = useState([]);

	// temp user data
	const userData = { //mock data. should use userData from useAxios
		image: dev_fish,
		username: 'bob delor',
		following: 14,
		followers: 56,
		bio: 'pppoopoo lorem ipsum cringe dolor pp pdwmdajowdawjdwadjawdnawjkdnawjk dnwajkdwna',
		catches: [
			{
				id: '1',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
			{
				id: '2',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
			{
				id: '3',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
			{
				id: '4',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
		],
		// loadout : [] (TODO)
	};

	useEffect(() => {
		// convert catches to catch cards
		const data = userData.catches.map((catchData) => {
			return <CatchDex key={catchData.id} {...catchData} />;
		});

		setCatchData(data);
	}, []);
	
  	return (
		<div className='content-container user'>
			<div className='user-profile'>
				<div className='user-image'>
					<img src={userData.image} alt='user'></img>
				</div>
				<div className='user-info'>
					<div className='user-name'>{userData.username}</div>
					<div className='user-following'>Following: {userData.following}</div>
					<div className='user-followers'>Followers: {userData.followers}</div>
				</div>
				<div className='user-bio'>
					{userData.bio}
				</div>
			</div>
			<div className='user-catches'>
				{catchData}
			</div>
		</div>
	);
};

export default User;
