// homepage card
//wrapper for bio and dex + other functions
import { FaRegHeart, FaCircleUser, FaRegShareFromSquare } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

function CatchCard(props) {
    // PROBLEM: we don't have liked array for users. how to tell when user liked? fully client side. need likes to be stateful
    const { uid, image_id, species, weight, size, type, likes } = props;
    const navigate = useNavigate();
    console.log(image_id)

    return (
        <div className='catch-card'>
            {   image_id &&
                <img src={`https://catches.storage.googleapis.com/${image_id}.jpg`} alt='Fish'></img>
            }
            <div className='card-desc'>
                {/* <div className='card-type'>{type}</div> */}
                <div className='card-icons'>
                    <FaCircleUser size={45} onClick={() => navigate(`/u/${uid}`)}/>
                    
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
                        <FaRegShareFromSquare size={25} onClick={() => navigate(`/c/${cid}`)}/>
                    </div>
                    {/* <div className='card-etc'>
                        <BsThreeDots size={25}/>
                    </div> */}
                </div>
                <div className='card-info'>
                    <div className='card-species'>
                        Species: {species}
                    
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
