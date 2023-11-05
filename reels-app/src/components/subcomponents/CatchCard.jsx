// homepage card
//wrapper for bio and dex + other functions
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import dev_fish from '../../assets/dev_fish.jpg';

function CatchCard(props) {
    //init properties
    const { species, weight, size, type, likes } = props;
    const { user } = useContext(AuthContext);
    
    const [loading, setLoading] = useState(true);

    //use catchContext?
    useEffect(() => {
        // get data
    }, []);

    return (
        <div className='catch-card'>
            <img src={dev_fish} alt='Fish'></img>
            <div className='card-species'>{species}</div>
            {/* svg? */}
            <div className='card-type'>{type}</div>
            <span className='card-weight'>{weight}</span>
            <span className='card-size'>{size}</span>
            <div className='card-likes'>
                {/* svg? */}
                {likes}
            </div>
        </div>
    );
};

export default CatchCard;
