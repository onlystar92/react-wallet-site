import React from "react";
import List from "./List";
import "./Sidebar.css";
import Eye from "../../assets/eye.png";

function Sidebar() {
	return (
		<div className="sidebar-container">
			<div className="top-div">
				<div className="balance">Total Balance</div>
				<div className="balance-details">
					$137.17{" "}
					<img style={{ marginLeft: "0.5rem" }} src={Eye} alt="" />
				</div>
			</div>

			<List />
		</div>
	);
}

export default Sidebar;
