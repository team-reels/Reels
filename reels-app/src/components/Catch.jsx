import { useState } from 'react';
import dev_fish from '../assets/dev_fish.jpg';


function Catch() {
  const image={dev_fish}, species='fish', weight=5, size=5, type='fish', likes=5;
  const [count, setCount] = useState(0);

  return (
		<div className='add-container'>
      <img src={image} alt='Fish'></img>
				<form className='form-container'>
					<label>
						Species:
						{species}
					</label>
					<label>
						Weight:
						{weight}
					</label>
					<label>
						Length:
						{size}
					</label>
					<label>
						Bio:
						<input
							className="input"
							id="bio"
						/>
					</label>
				</form>
		</div>
  );
};

export default Catch;
