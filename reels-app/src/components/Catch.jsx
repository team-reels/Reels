import { useEffect, useState } from 'react';
import dev_fish from '../assets/dev_fish.jpg';
import { useParams } from 'react-router';
import axios from 'axios';
import '../styles/catch.scss';


function Catch() { // need to receive bio in as well
	const [catchData, setCatchData] = useState(null);
	const params = useParams();
	const cid = params.cid;

	// TODO: validate cid

	useEffect(() => {
		// get catch data
		const fetchData = async () => {
			try {
				const { data } = await axios.post("http://localhost:8000/catch_ap/get_catch", {cid: cid});
				
				if(!data) throw 'No catch found';

				setCatchData(data);
			} catch(e) {
				console.log(e.message);
			}
		}
		fetchData();
	}, []);

  	return (
		<div className='catch-container'>
			{	catchData ?
				<div>
					<img className='image-class'src={dev_fish} alt='Fish'></img>
					<form className='form-container'>
						<label>
							Species:&nbsp;
							{catchData.species}
						</label>
						<label>
							Weight:&nbsp;
							{catchData.weight}
						</label>
						<label>
							Length:&nbsp;
							{catchData.size}
						</label>
					</form> 
				</div> :
				<div> Catch does not exist! </div>
			}
		</div>
  );
};

export default Catch;
