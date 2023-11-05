import { useState, useEffect } from 'react';
import CatchCard from './subcomponents/CatchCard';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/home.scss';

function Home() {
	const [catchData, setCatchData] = useState([]);

	useEffect(() => {
		// gather catch data , set state
		const data = [
			//  species, weight, size, type, likes 
			<CatchCard key='1' id='1' species='fish' weight={5} size={5} type='fish' likes={5}></CatchCard>,
			<CatchCard key='2' id='2' species='bish' weight={5} size={5} type='fish' likes={5}></CatchCard>,
			<CatchCard key='3' id='3' species='dish' weight={5} size={5} type='fish' likes={5}></CatchCard>,
			<CatchCard key='4' id='4' species='kish' weight={5} size={5} type='fish' likes={5}></CatchCard>
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
