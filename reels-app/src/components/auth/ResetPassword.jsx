import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/auth.scss";
import { resetPassword } from "../../api/auth.js";

function ResetPassword() {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log('hi')
	const doResetPassword = (e) => {
		const oobCode = searchParams.get("oobCode");
		console.log(oobCode)
		e.preventDefault();
		const password = document.getElementById("password").value;
		resetPassword(password, oobCode);
	};
	return (
		<div className="content-container auth">
			<div className="forgot-container">
				<form className="forgot-form" onSubmit={doResetPassword}>
					<label>
						<input
							className="input"
							id="password"
							type="password"
							placeholder="password"
						/>
					</label>
					<button className="login-button" type="submit">
						Reset Password
					</button>
				</form>
			</div>
		</div>
	);
}

export default ResetPassword;
