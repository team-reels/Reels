import { useState } from 'react';
import dev_fish from '../assets/dev_fish.jpg';
import '../styles/catch.scss';


function Catch(props) { // need to receive bio in as well
  let { image, species, weight, size, type, likes } = props;
  species='fish', weight=5, size=5, type='fish', likes=5;
  const [count, setCount] = useState(0);

  return (
		<div className='add-container'>
      <img className='image-class'src={dev_fish} alt='Fish'></img>
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
