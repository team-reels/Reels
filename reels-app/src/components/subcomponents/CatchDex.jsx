import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function CatchDex(props) {
    const { cid, image_id, species, weight, size, type, likes} = props;

    return (
        <div className='catch-dex'>
            <div className='dex-species'>{species}</div>
            {/* <Link to={`/c/${cid}`}> */}
            {   image_id && 
                <img src={`https://catches.storage.googleapis.com/${image_id}.jpg`} alt='Fish'></img>
            }
            {/* </Link> */}
            {/* should we even include the desc? */}
            <div className='dex-desc'>
                {/* <div className='dex-type'>{type}</div> */}
                <div className='dex-info'>
                    <div className='dex-specs'>
                        <span>{weight} Ibs</span>
                        <span>{size} In</span>
                    </div>
                    {/* svg? */}
                </div>
            </div>
        </div>
    );
};

export default CatchDex;
