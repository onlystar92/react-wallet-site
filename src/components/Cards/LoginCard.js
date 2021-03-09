import React from "react";
import Logo from "../../assets/2local logo wht.svg";
import "./Card.css";

function LoginCard() {
	return (
		<>
			<div className="login-card-container">
				<img className="login-card-logo" src={Logo} alt="" />
				<h1 className="login-card-heading">Welcome Back!</h1>
				<div className="line"></div>

				<label className="login-card-label" htmlFor="">
					Wallet ID
				</label>
				<input className="login-card-input" type="text" />
				<div className="login-card-forgot-wallet">
					Forgot your Wallet ID? Request a reminder via email.{" "}
					<span>Request Wallet ID</span>
				</div>
				<div className="login-card-forgot-pass">
					Password
					<span>Forgot password?</span>
				</div>
				<input className="login-card-input" type="password" />
				<button className="login-btn">LOG IN</button>
				<div className="login-card-signup">
					<span>Login via Mobile</span>
					<span>Need some help?</span>
				</div>
			</div>

			<div className="login-card-no-wallet">
				Don't have an wallet? <span>Sign up</span>{" "}
			</div>
		</>
	);
}

export default LoginCard;
