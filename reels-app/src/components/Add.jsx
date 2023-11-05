import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaSquarePlus } from 'react-icons/fa6';
import '../styles/add.scss';
import { useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

function Add() {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const submitAdd = async (e) => {
		e.preventDefault();

		const species = document.getElementById('species').value;
		const weight = document.getElementById('weight').value;
		const length = document.getElementById('length').value;
		const image = document.getElementById('add-pic').files[0];
		const img_name = uuidv4();

		// TODO: validate
		try {
			const add_catch = await axios.post("http://localhost:8000/catch_api/add_catch", {species: species, weight: weight, size: length, uid: currentUser.uid, image_id: img_name});
			const add_data = await axios.put(`https://catches.storage.googleapis.com/${img_name}.jpg`, image);

			if(!add_catch) throw 'catch not added';
			if(!add_data) throw 'data not added';

			console.log('post success');
			navigate('/');
		} catch(e) {
			console.log(e ?? e.message);
		}

	};

  	return (
		<div className='content-container add'>
			<div className='add-container'>

				<input id='add-pic' className='add-pic' type="file" accept="image/jpeg, image/png, image/jpg"/>
				<form className='form-container-add' onSubmit={submitAdd}>
					<label className='add-label'>
						Species:
					</label>
					<input
						className="input"
						id="species"
						/>
					<label className='add-label'>
						Weight:
					</label>
					<input
						className="input"
						id="length"
						/>
					<label className='add-label'>
						Length:
					</label>
					<input
						className="input"
						id="weight"
					/>
					<button className="submit" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
  );
};

export default Add;
