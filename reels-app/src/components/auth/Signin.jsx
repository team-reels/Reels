import { useState } from 'react';
import { signin } from '../../api/auth.js';
import '../../styles/auth.scss';

function Signin() {

    const signIn = (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		// continue with signin code here (import from api/auth.js and run code)
		// navigate to '/'
	};
	return (
		<div className='signin-container'>
			<form onSubmit={signIn}>
				<div className='input-container'>
					<input id='email' type='email' placeholder='email' />
				</div>
				<div className='input-container'>
					<input id='password' type='password' placeholder='password' />
				</div>
				<div className='login-button'>
					<button type='submit'>Login</button>
				</div>
				<label>
					<input type="checkbox" checked="checked" name="remember"/> Remember me
				</label>
			</form>
		</div>
	);
};

export default Signin;
