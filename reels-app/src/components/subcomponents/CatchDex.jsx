import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function CatchDex(props) {
    const { id, image, species, weight, size, type, likes} = props;

    return (
        <div className='catch-dex'>
            <img src={image} alt='Fish'></img>
            <div className='dex-desc'>
                {/* <div className='dex-type'>{type}</div> */}
                <div className='dex-info'>
                    <div className='dex-species'>Species: {species}</div>
                    {/* svg? */}
                    <div className='dex-weight'>Weight: {weight}</div>
                    <div className='dex-size'>Length: {size}</div>
                </div>
            </div>
        </div>
    );
};

export default CatchDex;
