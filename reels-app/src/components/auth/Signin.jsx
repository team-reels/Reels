import { useEffect, useState } from 'react';
import { signin } from '../../api/auth.js';
import { Link } from 'react-router-dom';
import '../../styles/auth.scss';

function Signin() {
	const [checked, setChecked] = useState(false);
	const [forgot, setForgot] = useState(false);

	useEffect(() => {
		console.log(checked);
	}, [checked])

    const signIn = (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		// continue with signin code here (import from api/auth.js and run code)
		// navigate to '/'
		signin(email, password)
	};
	return (
		<div className='signin-container'>
			<div className='signin-signup'>
				<button className='signin'>
					<Link to='/signin'>Sign In
					</Link>
				</button>
				<button className='signup'>
					<Link to='/signup'>Sign Up
					</Link>
				</button>
			</div>
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
					<Link to='/forgot' style={{textAlign:'right', display:'inline-block', float:'right'}}>Forgot Password</Link>
				</label>
				{/* <div class="divider">or</div> */}
			</form>
		</div>
	);
};

export default Signin;
