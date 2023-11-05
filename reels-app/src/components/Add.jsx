import { useState } from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import '../styles/add.scss';

function Add() {
  	const [count, setCount] = useState(0);
	// const onSubmit = (e) => {
	// 	//complete
	// };

  	return (
		<div className='add-container'>
				<FaSquarePlus size={500} value={{width:'auto'}}/>
				<form className='form-container'>
					<label>
						Species:
						<input
							className="input"
							id="species"
						/>
					</label>
					<label>
						Weight:
						<input
							className="input"
							id="length"
						/>
					</label>
					<label>
						Length:
						<input
							className="input"
							id="weight"
						/>
					</label>
					<label>
						Bio:
						<input
							className="input"
							id="bio"
						/>
					</label>
					<button className="submit" type="submit">
						Submit
					</button>
				</form>
		</div>
  );
};

export default Add;
