import React, { useEffect } from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { selectDesc, selectTitle, selectIcon } from "../../slices/slice";
import Graph from "../Graph/Graph";

function Dashboard({ isOpen, subOpen }) {
	var title = useSelector(selectTitle);
	var desc = useSelector(selectDesc);
	var icon = useSelector(selectIcon);
	var x;

	function getClass() {
		if (isOpen) {
			if (subOpen) {
				x = "dashboard-open2";
			} else {
				x = "dashboard-close2";
			}
		} else if (!isOpen) {
			x = "dashboard-close";
		}
		return x;
	}

	return (
		<div className={` text-left  mt-4 ${getClass()} `}>
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
		</div>
	);
}

export default Dashboard;
