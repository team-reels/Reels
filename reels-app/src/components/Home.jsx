import { useState, useEffect } from 'react';
import CatchCard from './subcomponents/CatchCard';
import { AuthContext } from '../contexts/AuthContext';
import dev_fish from '../assets/dev_fish.jpg';
import '../styles/home.scss';

function Home() {
	const [catchData, setCatchData] = useState([]);

	useEffect(() => {
		// gather catch data , set state
		const data = [
			//  species, weight, size, type, likes 
			<CatchCard key='1' cid='1' image={dev_fish} species='fish' weight={5} size={5} type='fish' likes={5}></CatchCard>,
			<CatchCard key='2' cid='2' image={dev_fish} species='bish' weight={5} size={5} type='fish' likes={5}></CatchCard>,
			<CatchCard key='3' cid='3' image={dev_fish} species='dish' weight={5} size={5} type='fish' likes={5}></CatchCard>,
			<CatchCard key='4' cid='4' image={dev_fish} species='kish' weight={5} size={5} type='fish' likes={5}></CatchCard>
		];
		setCatchData(data);

	}, []);

	return (
		<div className='content-container home'>
			<div className='home'>
				{catchData}
			</div>
		</div>
	);
};

export default Home;
