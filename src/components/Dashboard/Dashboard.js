import React from "react";
import "./Dashboard.css";
import Pencil from "../../assets/iconmonstr-pencil-14.png";
import Load from "../../assets/Image 5.png";

function Dashboard({ title, description, icon }) {
	return (
		<div className="dashboard-container">
			<div className="top-section">
				<img src={icon} alt="" />
				<span style={{ marginLeft: "0.5rem" }}>{title}</span>
				<span className="title">{description}</span>
				<img className="edit" src={Pencil} alt="" />
				<span className="key">
					0x7f057dbb1128a4fff9711344c38e820d17b78707
				</span>
			</div>
			<div className="graph">
				<div>
					<div style={{ marginBottom: "3px", marginTop: "7px" }}>
						{title} Price
					</div>
					<div style={{ fontWeight: "bold", marginBottom: "3px" }}>
						$1,355.88
					</div>
					<div style={{ fontSize: "10px", marginBottom: "7px" }}>
						<span style={{ color: "red" }}>-$595.69 (30.52)%</span>{" "}
						this week
					</div>
				</div>
				<div>
					<img src="" alt="" />
				</div>
			</div>
			<div className="btn-grp">
				<button className="btn">Send / Receive</button>
				<button className="btn">Buy / Sell</button>
				<button className="btn">Swap</button>
				<button className="btn">Staking</button>
			</div>
			<div style={{ textAlign: "center" }}>
				<button className="large-btn">Wallet transactions</button>
			</div>
			<div className="load-transaction">
				<img src={Load} alt="" />
				<div>Click to load all transactions</div>
			</div>
		</div>
	);
}

export default Dashboard;
