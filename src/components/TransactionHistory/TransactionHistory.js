import React from "react";
import TransactionHistoryItem from "./TransactionHistoryItem";
import "./TransactionHistory.css";

function TransactionHistory() {
	return (
		<div className="mt-4 rounded-3 bg-white ml-4 mr-4 text-left pt-4 pl-4 pr-4 transactionHistoryContainer">
			<p className="font-weight-bold transactionHistoryHead">
				Transaction History
			</p>
			<TransactionHistoryItem status="COMPLETED" />
			<TransactionHistoryItem status="CANCELLED" />
			<TransactionHistoryItem status="IN PROGRESS" />
		</div>
	);
}

export default TransactionHistory;
