import React, { useEffect } from "react";
import "./Dashboard.css";
import Pencil from "../../assets/iconmonstr-pencil-14.png";
import Load from "../../assets/Image 5.png";
import { useSelector } from "react-redux";
import { selectDesc, selectTitle, selectIcon } from "../../slices/slice";
import Graph from "../Graph/Graph";

function Dashboard() {
	var title = useSelector(selectTitle);
	var desc = useSelector(selectDesc);
	var icon = useSelector(selectIcon);
	return (
		<div className="ml-4 text-left  mt-4 " style={{ width: "45%" }}>
			<h1
				className="font-weight-bold"
				style={{ fontSize: "35px", color: "#1D2943" }}
			>
				{desc}
			</h1>
			<div className="d-flex justify-content-between">
				<div>
					<span className="font-weight-bold">
						1 {title} : 38,447.38 USD
					</span>
					<i
						style={{ color: "#56E19F" }}
						class="ml-2 fas fa-arrow-up"
					></i>
					<span className="ml-2" style={{ color: "#56E19F" }}>
						8.68%
					</span>
				</div>
				<div style={{ color: "#A1A1A3" }}>
					02d5d94756cdc38e0fc712e629b9fb
				</div>
			</div>
			<Graph />
		</div>
	);
}

export default Dashboard;
