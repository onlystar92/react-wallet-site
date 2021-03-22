import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSettingsTab } from "../../slices/slice";

function Dropdown({ setopen }) {
	const dispatch = useDispatch();
	return (
		<div className="d-flex flex-column justify-content-between dropdown-container">
			<div className="d-flex flex-column justify-content-between dropdown-top">
				<Link
					onClick={() => {
						setopen(false);
						dispatch(setSettingsTab("Profile"));
					}}
					to="/settings"
					className="dropdown-link"
				>
					<div>
						<i class="mr-2 fas fa-user"></i> Account
					</div>
				</Link>
				<Link
					onClick={() => setopen(false)}
					to="/help"
					className="dropdown-link"
				>
					{" "}
					<div>
						<i class="mr-2 fas fa-question-circle"></i> Help
					</div>
				</Link>

				<Link
					onClick={() => {
						setopen(false);
						dispatch(setSettingsTab("General"));
					}}
					to="/settings"
					className="dropdown-link"
				>
					<div>
						<i class="mr-2 fas fa-cog"></i> Settings
					</div>
				</Link>
			</div>
			<div className="dropdown-bottom">
				<i class="mr-2 fas fa-file-export"></i> Logout
			</div>
		</div>
	);
}

export default Dropdown;
