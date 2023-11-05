// homepage card
//wrapper for bio and dex + other functions
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FaRegHeart, FaCircleUser, FaRegShareFromSquare } from 'react-icons/fa6';

function CatchCard(props) {
    //init properties
    const { image, species, weight, size, type, likes } = props;
    const { user } = useContext(AuthContext);
    
    const [loading, setLoading] = useState(true);

    //use catchContext?
    useEffect(() => {
        // get data
    }, []);

    return (
        <div className='catch-card'>
            <img src={image} alt='Fish'></img>
            <div className='card-desc'>
                {/* <div className='card-type'>{type}</div> */}
                <div className='card-icons'>
                    <FaCircleUser size={45}/>
                    
                    {/*
                      * If user is logged in and has liked this post, .card-liked;
                      * otherwise, .card-unliked:
                      * 1. check if user has liked this post (grab the liked array from db and compare username/id)
                      * 2. change class according using ternary
                      * 
                      * ex: isLiked() -> boolean
                      * - will return true if the user has liked the post
                      * - otherwise, returns false
                      */}
                    <div className={'card-likes'}>
                        {/* likes */}
                        <FaRegHeart size={25}/>
                        {likes}
                    </div>
                    <div className='card-share'>
                        {/* creates a link */}
                        <FaRegShareFromSquare size={25}/>
                    </div>
                    {/* <div className='card-etc'>
                        <BsThreeDots size={25}/>
                    </div> */}
                </div>
                <div className='card-info'>
                    <div className='card-species'>
                        Species:{species}
                    
                    </div>
                    {/* svg? */}
                    <div className='card-weight'>Weight: {weight}</div>
                    <div className='card-size'>Length: {size}</div>
                </div>
            </div>
        </div>
    );
};

export default CatchCard;
