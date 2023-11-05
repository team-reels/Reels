import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

// NOTE: halting this page; unneeded for MVP

function Catch() {
	// const { catchData, setCatchData } = useAxios('link');
	const catchData = {
		id: '1',
		species: 'fish',
		weight: 5,
		size: 5,
		type: 'fish',
		likes: 5
	};
	const params = useParams(); 
	const catchId = params.catchId;

	return (
		<div className='content-container catch'>
			{/* <div className='buttons'>
				<button className='next'>Next</button>
				<button className='prev'>Prev</button>
			</div> */}
			<div>
				
			</div>
			{catchData.id}
			
		</div>
	);
};

export default Catch;
