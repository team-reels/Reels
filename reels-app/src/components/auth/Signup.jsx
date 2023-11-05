import { useEffect, useState } from "react";
import { signup } from "../../api/auth.js";
import { Link } from "react-router-dom";
import "../../styles/auth.scss";

function SignUp() {
	const signUp = (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		// continue with signin code here (import from api/auth.js and run code)
		// navigate to '/'
	};

	return (
		<div className="signin-container">
			<div className="signin-signup">
				<Link to="/signin">
					<button className="signin">Sign In</button>
				</Link>
				<Link to="/signup">
					<button className="signup">Sign Up</button>
				</Link>
			</div>
			<form className="signin-form" onSubmit={signup}>
				<label>
					<input
						className="input"
						id="email"
						type="email"
						placeholder="email"
					/>
				</label>
				<label>
					<input
						className="input"
						id="username"
						type="username"
						placeholder="username"
					/>
				</label>
				<label>
					<input
						className="input"
						id="password"
						type="password"
						placeholder="password"
					/>
				</label>
				<button className="login-button" type="submit">
					Login
				</button>
			</form>
		</div>
	);
}

export default SignUp;
