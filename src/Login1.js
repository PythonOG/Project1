import React, { useState } from 'react';
import './Login1.css'; // Import your CSS file

function Login1() {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

    const handleForgotPasswordClick = () => {
        setShowLoginForm(false);
        setShowResetPasswordForm(true);
    };

    const handleCreateAccountClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(true);
    };

    const handleSignInClick = () => {
        setShowRegisterForm(false);
        setShowLoginForm(true);
    };

    const handleSignInClick2 = () => {
        setShowResetPasswordForm(false);
        setShowLoginForm(true);
    };

    return (
        <div className="login-page">
            <div className="form">
                <img src="/Example/imgs/logo.png" alt="Logo" className="logo" />
                {showLoginForm && (
                    <form className="login-form">
                        <input type="text" placeholder="username" required />
                        <input type="password" placeholder="password" required />
                        <p className="forgot">Forgot your password? <a href="#" onClick={handleForgotPasswordClick}>Reset Password</a></p>
                        <button>login</button>
                        <p className="message">Don't have account? <a href="#" onClick={handleCreateAccountClick}>Create Account</a></p>
                    </form>
                )}
                
                {showRegisterForm && (
                    <form className="register-form">
                        <input type="text" placeholder="First name" required />
                        <input type="text" placeholder="Last name" required />
                        <input type="email" placeholder="Email address" required />
                        <input type="tel" id="mobilenumber" name="mobilenumber" pattern="[0-9]{10}" placeholder="Phone Number" required />
                        <input type="tel" placeholder="Aadhaar Number" pattern="[0-9]{12}" required />
                        <input type="password" placeholder="Password" required />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#" onClick={handleSignInClick}>Sign In</a></p>
                    </form>
                )}

                {showResetPasswordForm && (
                    <form className="reset-password-form">
                        <input type="email" placeholder="email address" required />
                        <button>submit</button>
                        <p className="message">Remembered your password? <a href="#" onClick={handleSignInClick2}>Sign In</a></p>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Login1;
