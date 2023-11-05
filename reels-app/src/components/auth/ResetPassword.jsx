import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/auth.scss";
import { validatePassword } from "../../utils/validation.js";
import { resetPassword } from "../../api/auth.js";

function ResetPassword() {
	const [searchParams, setSearchParams] = useSearchParams();
	const doResetPassword = (e) => {
		const oobCode = searchParams.get("oobCode");
		e.preventDefault();
		const password = document.getElementById("password").value;
		if (!validatePassword(password)) {
			alert("Bad password");
			return;
		}
		resetPassword(password, oobCode);
	};
	return (
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
	);
}

export default ResetPassword;
