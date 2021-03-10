import React, { useEffect } from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { selectDesc, selectTitle, selectIcon } from "../../slices/slice";
import Graph from "../Graph/Graph";
import DashboardTab from "./DashboardTab";

function Dashboard({ isOpen }) {
	var title = useSelector(selectTitle);
	var desc = useSelector(selectDesc);
	var icon = useSelector(selectIcon);

	return (
		<div className={`text-left dashboard ${!isOpen && "w-100"}`}>
			<h1 className="font-weight-bold heading">{desc}</h1>
			<div className="d-flex justify-content-between">
				<div>
					<span className="font-weight-bold">
						1 {title} : 38,447.38 USD
					</span>
					<i class="ml-2 fas fa-arrow-up arrow-up"></i>
					<span className="ml-2 percentage">8.68%</span>
				</div>
				<div className="code">02d5d94756cdc38e0fc712e629b9fb</div>
			</div>
			<Graph isOpen={isOpen} />
			<DashboardTab />
			<hr className="mt-4" />
		</div>
	);
}

export default Dashboard;
