import React from "react";
import Logo from "../../assets/2local logo wht.svg";
import "./Card.css";

function Dropdown({ title }) {
	return (
		<div class="dropdown">
			<button
				class="text-left d-flex justify-content-between align-items-center pr-4  profile-input dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				{title}
				<i class="fas fa-caret-down caret-dropdown"></i>
			</button>
			<div
				class="profile-dropdown-select dropdown-menu"
				aria-labelledby="dropdownMenuButton"
			>
				<a class="dropdown-item" href="#">
					Action
				</a>
				<a class="dropdown-item" href="#">
					Another action
				</a>
				<a class="dropdown-item" href="#">
					Something else here
				</a>
			</div>
		</div>
	);
}

function CreateUser() {
	return (
		<>
			<div className="new-wallet-card-container">
				<img className="login-card-logo" src={Logo} alt="" />
				<h1 className="newwallet-card-heading">Create user</h1>
				<div className="line"></div>
				<label className="newwallet-card-label" htmlFor="">
					Full Name
				</label>
				<input
					className="login-card-input"
					type="text"
					placeholder="Adam Sydanus"
				/>
				<label className="newwallet-card-label" htmlFor="">
					Country
				</label>
				<Dropdown title="California, USA" />
				<label className="newwallet-card-label" htmlFor="">
					Address
				</label>
				<input
					className="login-card-input"
					type="text"
					placeholder="4622 Linda Street"
				/>
				<label className="newwallet-card-label" htmlFor="">
					Mobile Number
				</label>
				<input
					className="login-card-input"
					type="text"
					placeholder="+1 202 555 0144"
				/>
				{/* <div className="agree-to-terms">
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
				</div> */}
				<button className="login-btn">Create account</button>
			</div>

			{/* <div className="login-card-no-wallet">
				Already have a Wallet? <span>Log in</span>{" "}
			</div> */}
		</>
	);
}

export default CreateUser;
