import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown({ setopen }) {
	return (
		<div className="d-flex flex-column justify-content-between dropdown-container">
			<div className="d-flex flex-column justify-content-between dropdown-top">
				<div>
					<i class="mr-2 fas fa-user"></i> Account
				</div>

				<div>
					<i class="mr-2 fas fa-question-circle"></i> Help
				</div>
				<Link
					onClick={() => setopen(false)}
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
