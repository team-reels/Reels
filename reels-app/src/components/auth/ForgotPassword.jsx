import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.scss';

function ForgotPassword() {
    const forgotPassword = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
    };
    return (
        <div className="forgot-container">
            <form className="forgot-form" onSubmit={forgotPassword}>
                <label>
                    <input
                        className="input"
                        id="email"
                        type="email"
                        placeholder="email"
                    />
                </label>
                <button className="login-button" type="submit">
                    Send Email
                </button>
                <Link to="/login">Cancel</Link>
            </form>
        </div>
    );
}

export default ForgotPassword;
