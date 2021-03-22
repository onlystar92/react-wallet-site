import React, { useEffect } from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { selectDesc, selectTitle, selectTab } from "../../slices/slice";
import Graph from "../Graph/Graph";
import GraphMobile from "../Graph/GraphMobile";
import DashboardTab from "./DashboardTab";
import TransactionHistoryTable from "./TransactionHistory/TransactionHistory";
import BuySell from "./BuySell/BuySell";
import Send from "./Send/Send";
import Receive from "./Receive/Receive";
import Staking from "./Staking/Staking";

function Dashboard({ isOpen }) {
	var title = useSelector(selectTitle);
	var desc = useSelector(selectDesc);
	const tab = useSelector(selectTab);

	return (
		<div
			className={`pt-4 pl-md-4 text-left dashboard ${!isOpen && "w-100"}`}
		>
			<div className=" d-flex justify-content-start align-items-center">
				<span className="font-weight-bold heading">{desc}</span>
				<span>
					<i class="ml-3 fas fa-pencil-alt pencil"></i>
				</span>
			</div>

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
			<GraphMobile isOpen={isOpen} />

			<div className="dashboard-bottom">
				<DashboardTab />

				<hr className="mt-4" />
				{tab === "Transaction History" ? (
					<TransactionHistoryTable />
				) : tab === "Sell" ? (
					<BuySell tab="Sell" />
				) : tab === "Buy" ? (
					<BuySell tab="Buy" />
				) : tab === "Send" ? (
					<Send />
				) : tab === "Receive" ? (
					<Receive />
				) : tab === "Staking" ? (
					<Staking />
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Dashboard;
