import React from "react";
import "./styles.css";

function CheckBoxes() {
	return (
		<div className=" d-flex justify-content-end align-items-center">
			<span className="checboxes-container">
				<input type="checkbox" name="" id="" />
				<span className="ml-2">Email</span>
			</span>
			<span className="ml-5 checboxes-container">
				<input type="checkbox" name="" id="" />
				<span className="ml-2">SMS</span>
			</span>
		</div>
	);
}

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

function GeneralRow({ head, desc, span, right }) {
	return (
		<>
			<div className="d-flex justify-content-between mt-5 mb-1">
				<div className="preferences-container-left">
					<div className="left-head">{head}</div>
					<div className="left-desc">
						{desc}
						<span>{span}</span>
					</div>
				</div>
				<div className="preferences-container-right">{right}</div>
			</div>
			<hr className="mt-5 " />
		</>
	);
}

function Preferences() {
	return (
		<div className="general-container">
			<GeneralRow
				head="Mobile Number"
				desc="Your mobile phone can be used to enable two-factor authentication,helping to secure your wallet from unauthorized access,and to send bitcoin payment alerts when you receive funds."
				right="Add Mobile Number"
			/>
			<GeneralRow
				head="Wallet Language"
				desc="Set your preferred language."
				right={<Dropdown title="English" />}
			/>
			<GeneralRow
				head="Local Currency"
				desc="Select your local currency."
				right={<Dropdown title="U.S. Dollar" />}
			/>
			<GeneralRow
				head="Notifications"
				desc="Choose how to get notified when you receive crypto."
				right={<CheckBoxes />}
			/>
		</div>
	);
}

export default Preferences;
