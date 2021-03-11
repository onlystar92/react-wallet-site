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

function DateOfBirth() {
	return (
		<div className="profile-input d-flex justify-content-between align-items-center">
			<input type="text" className="profile-calendar-input" />
			<i class="fas fa-calendar-alt mr-4 calendar-icon"></i>
		</div>
	);
}

function CountryDropdown() {
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
				California, USA
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

function Inputs({ label }) {
	return (
		<div className="col-sm">
			<label className="profile-label" htmlFor="">
				{label}
			</label>
			<br />
			{label === "Country" ? (
				<CountryDropdown />
			) : label === "Date of birth" ? (
				<DateOfBirth />
			) : (
				<input className="profile-input" type="text" />
			)}
		</div>
	);
}

function Profile() {
	return (
		<div className="profile-container">
			<ProfileTop />
			<div className="mt-5 row">
				<Inputs label="Full Name" />
				<Inputs label="Adress" />
			</div>
			<div className="mt-5 row">
				<Inputs label="Email Adress" />
				<Inputs label="Mobile Number" />
			</div>
			<div className="mt-5 row">
				<Inputs label="Country" />
				<Inputs label="Date of birth" />
			</div>
		</div>
	);
}

export default Profile;
