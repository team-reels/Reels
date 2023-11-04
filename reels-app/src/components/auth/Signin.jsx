import { useEffect, useState } from 'react';
import { signin } from '../../api/auth.js';
import '../../styles/auth.scss';

function Signin() {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		console.log(checked);
	}, [checked])

    const signIn = (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		// continue with signin code here (import from api/auth.js and run code)
		// navigate to '/'
	};
	return (
		<div className='signin-container'>
			<form className='signin-form' onSubmit={signIn}>
				<label>
					<input className='input' id='email' type='email' placeholder='email' />
					</label>
					<label>
					<input className='input' id='password' type='password' placeholder='password' />
					</label>
					<button className='login-button' type='submit'>Login</button>
				<label>
					<input type="checkbox" checked={checked} name="remember" onChange={() => setChecked(!checked)}/> Remember me
				</label>
			</form>
		</div>
	);
};

export default Signin;
