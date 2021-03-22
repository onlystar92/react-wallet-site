import React from "react";
import "./styles.css";

function PasswordRow({ label }) {
	return (
		<div className=" password-row-wrapper">
			<label className="password-row-label" htmlFor="">
				{label}
			</label>{" "}
			<input className="password-row-input" type="text" />
		</div>
	);
}

function Password() {
	return (
		<div className="d-flex flex-column align-items-center ">
			<div className="mt-3 mt-sm-5 password-container">
				<PasswordRow label="Current Password" />
				<PasswordRow label="New Password" />
				<PasswordRow label="Confirm Password" />
				<button className="mt-5 password-btn">Change</button>
			</div>
		</div>
	);
}

export default Password;
