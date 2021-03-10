import React from "react";
import Logo from "../../assets/2local logo wht.svg";
import "./Card.css";

function NewWalletcard() {
	return (
		<>
			<div className="new-wallet-card-container">
				<img className="login-card-logo" src={Logo} alt="" />
				<h1 className="newwallet-card-heading">Create New Wallet</h1>
				<div className="line"></div>
				<label className="newwallet-card-label" htmlFor="">
					Your Email
				</label>
				<input className="login-card-input" type="text" />
				<label className="newwallet-card-label" htmlFor="">
					Password
				</label>
				<input className="login-card-input" type="password" />
				<label className="newwallet-card-label" htmlFor="">
					Repeat Password
				</label>
				<input className="login-card-input" type="password" />
				<div className="agree-to-terms">
					<input type="checkbox" className="checkbox" />I understand
					that Blockchain.com never stores passwords and therefore
					cannot recover or reset my password. If I lose access to my
					wallet, I must use my{" "}
					<span> Secret Private Key Recovery Phrase</span> to access
					my funds.
				</div>
				<div className="newwallet-forgot-pass">
					By creating an account, you agree to 2local’s{" "}
					<span>Terms of Service</span> & <span> Privacy Policy</span>
					.
				</div>
				<button className="login-btn">Create Wallet</button>
			</div>

			<div className="login-card-no-wallet">
				Already have a Wallet? <span>Log in</span>{" "}
			</div>
		</>
	);
}

export default NewWalletcard;
