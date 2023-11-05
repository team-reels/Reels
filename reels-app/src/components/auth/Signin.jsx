import { useEffect, useState } from "react";
import { signin } from "../../api/auth.js";
import { Link } from "react-router-dom";
import "../../styles/auth.scss";

function Signin() {
	const [checked, setChecked] = useState(false);
	const [forgot, setForgot] = useState(false);

	useEffect(() => {
		console.log(checked);
	}, [checked]);

	const signIn = (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		// continue with signin code here (import from api/auth.js and run code)
		// navigate to '/'
		signin(email, password);
	};
	return (
		<div className="auth-container">
			<div className="auth-signup">
				<Link to="/signin">
					<button className="signin">Sign In</button>
				</Link>
				<Link to="/signup">
					<button className="signup">Sign Up</button>
				</Link>
			</div>
			<form className="auth-form" onSubmit={signIn}>
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
						id="password"
						type="password"
						placeholder="password"
					/>
				</label>
				<button className="login-button" type="submit">
					Login
				</button>
				<label>
					<input
						type="checkbox"
						checked={checked}
						name="remember"
						onChange={() => setChecked(!checked)}
					/>{" "}
					Remember me
					<Link
						to="/forgot"
						style={{
							textAlign: "right",
							display: "inline-block",
							float: "right",
						}}
					>
						Forgot Password
					</Link>
				</label>
				{/* <div class="divider">or</div> */}
			</form>
		</div>
	);
}

export default Signin;
