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
				<div className='add-pic'>
				<FaSquarePlus size={300} value={{width:'auto'}} onClick={()=>console.log('complete add pic')}/>
				</div>
				<form className='form-container-add'>
					<label className='add-label'>
						Species:
						<input
							className="input"
							id="species"
						/>
					</label>
					<label className='add-label'>
						Weight:
						<input
							className="input"
							id="length"
						/>
					</label>
					<label className='add-label'>
						Length:
						<input
							className="input"
							id="weight"
						/>
					</label>
					{/* <label>
						Bio:
						<input
							className="input"
							id="bio"
						/>
					</label> */}
					<button className="submit" type="submit">
						Submit
					</button>
				</form>
		</div>
  );
};

export default Add;
