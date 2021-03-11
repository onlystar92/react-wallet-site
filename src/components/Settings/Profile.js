import React from "react";
import Icon from "../../assets/Rectangle 337.png";
import "./styles.css";

function ProfileTop() {
	return (
		<div className="profile-head">
			<div className="profile-left">
				<img className="profile-img" src={Icon} alt="" />
				<div className="ml-4">
					<div className="profile-name">Adam Sydanus</div>
					<div className="update-picture">Update picture</div>
				</div>
			</div>
			<button className="save-changes">Save changes</button>
		</div>
	);
}

function Inputs() {
	return (
		<div>
			<label htmlFor=""></label>
			<input type="text" />
		</div>
	);
}

function Profile() {
	return (
		<div className="profile-container">
			<ProfileTop />
		</div>
	);
}

export default Profile;
