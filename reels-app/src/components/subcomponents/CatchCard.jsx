// homepage card
//wrapper for bio and dex + other functions
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FaRegHeart, FaCircleUser, FaRegShareFromSquare } from 'react-icons/fa6';
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
            <div className='card-desc'>
                {/* <div className='card-type'>{type}</div> */}
                <div className='card-icons'>
                    <FaCircleUser size={45}/>
                    <div className='card-likes'>
                        {/* likes */}
                        <FaRegHeart size={25}/>
                        {likes}
                    </div>
                    <div className='card-share'>
                        {/* creates a link */}
                        <FaRegShareFromSquare size={25}/>
                    </div>
                </div>
                <div className='card-info'>
                    <div className='card-species'>Species: {species}</div>
                    {/* svg? */}
                    <div className='card-weight'>Weight: {weight}</div>
                    <div className='card-size'>Length: {size}</div>
                </div>
            </div>
        </div>
    );
};

export default CatchCard;
