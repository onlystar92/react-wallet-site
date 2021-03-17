import React from "react";
import "./Dashboard.css";
import { setTab, selectTab } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";

function DashboardTab() {
	const dispatch = useDispatch();
	const tab = useSelector(selectTab);
	const getActive = (item) => {
		if (item === tab) {
			return "tab-active";
		}
	};
	return (
		<div className="d-flex tab justify-content-between">
			<div
				className={getActive("Send")}
				onClick={() => {
					dispatch(setTab("Send"));
				}}
			>
				Send
			</div>
			<div
				className={getActive("Receive")}
				onClick={() => {
					dispatch(setTab("Receive"));
				}}
			>
				Receive
			</div>
			<div
				className={getActive("Buy")}
				onClick={() => {
					dispatch(setTab("Buy"));
				}}
			>
				Buy
			</div>
			<div
				className={getActive("Sell")}
				onClick={() => {
					dispatch(setTab("Sell"));
				}}
			>
				Sell
			</div>
			<div
				className={getActive("Swap")}
				onClick={() => {
					dispatch(setTab("Swap"));
				}}
			>
				Swap
			</div>
			<div
				className={getActive("Staking")}
				onClick={() => {
					dispatch(setTab("Staking"));
				}}
			>
				Staking
			</div>
			<div
				className={getActive("Transaction History")}
				onClick={() => {
					dispatch(setTab("Transaction History"));
				}}
			>
				Transaction History
			</div>
		</div>
	);
}

export default DashboardTab;
