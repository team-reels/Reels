//wrapper for bio and dex + other functions
import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import CatchDex from './subcomponents/CatchDex';
import useAxios from '../hooks/useAxios';
import dev_fish from '../assets/dev_fish.jpg';
import { FaCircleUser } from 'react-icons/fa6';
import '../styles/user.scss'

function User() {
	// create link by auth?
	// const { userData } = useAxios('link');
	const [catchData, setCatchData] = useState([]);

	// temp user data
	const userData = { //mock data. should use userData from useAxios
		uid: 'g8Vs7pZe2GgnKqPmEIIv00hxus93',
		image: dev_fish,
		username: 'bob delor',
		following: 14,
		followers: 56,
		bio: 'bio pppoopoo lorem ipsum cringe dolor pp pdwmda jowdawj dwadja wdnawjkdnawjk dnwajkdwna', //bio char limit 140
		catches: [
			{
				cid: '1',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
			{
				cid: '2',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
			{
				cid: '3',
				image: dev_fish,
				species: 'fish',
				weight: 5,
				size: 5,
				type: 'fish',
				likes: 5
			},
			{
				cid: '4',
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
			return <CatchDex key={catchData.cid} {...catchData} />;
		});

		setCatchData(data);
	}, []);
	
  	return (
		<div className='content-container user'>
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
			</div>
		</div>
	);
};

export default User;
