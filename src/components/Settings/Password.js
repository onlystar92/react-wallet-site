import React from "react";
import "./styles.css";

function PasswordRow({ label }) {
	return (
		<div className=" password-row-wrapper">
			<label className="password-row-label col-lg-3" htmlFor="">
				{label}
			</label>{" "}
			<input className="password-row-input col-lg-9" type="text" />
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
				<div className="col-lg-3"></div>
				<button className="mt-5 password-btn">Change</button>
			</div>
		</div>
	);
}

export default Password;
