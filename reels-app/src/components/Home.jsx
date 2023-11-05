import { useState, useEffect } from 'react';
import CatchCard from './subcomponents/CatchCard';
import { AuthContext } from '../contexts/AuthContext';
import dev_fish from '../assets/dev_fish.jpg';
import '../styles/home.scss';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Home() {
	const [loading, setLoading] = useState(true);
	const [catchData, setCatchData] = useState([]);

	useEffect(() => {
		// 10 random catches per load
		const fetchData = async () => {
			try {
				const { data } = await axios.post("http://localhost:8000/catch_api/get_n_catches", {n: 10});

				if(!data || data.status == 'failure') throw 'Error: No catches found';

				if(!data.catches){
					return setCatchData([...catchList, <div>No catches left</div>]);
				}

				const catchList = await Promise.all(data.catches.map(async (fish) => {
					// const { data } = await axios.post("http://localhost:8000/user_api/get_user", {uid: fish.uid});
					return <CatchCard key={uuidv4()} cid={fish.cid} {...fish}/>;
				}));

				setCatchData(catchList);
				setLoading(false);	
			} catch(e) {
				console.log(e.message);
			}
		};
		Promise.resolve(fetchData());

	}, []);

	if(loading) {
		return (
			<div className='content-container home'>
				<div className='home'>
					<div>Loading...</div>
				</div>
			</div>
		);
	}

	return (
		<div className='content-container home'>
			<div className='home'>
				{catchData}
			</div>
		</div>
	);
};

export default Home;
