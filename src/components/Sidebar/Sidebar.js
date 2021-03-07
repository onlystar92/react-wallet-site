import React from "react";
import List from "./List";
import "./Sidebar.css";

function Sidebar({ data, isOpen, setsubOpen, subOpen }) {
	const addSquare = {
		color: "#526DAA",
		transform: "scale(1.7)",
	};

	return (
		<>
			<div
				className={`sidebar-container d-flex mt-4  ml-3 text-left pt-4 ${
					!isOpen ? "sidebar-close" : "sidebar-open"
				}`}
			>
				<div className="innerContainer">
					<div className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3">
						<div className="balanceStyle">Total Balance</div>
						<div className="font-weight-bold balanceAmount">
							$137.17
						</div>
						<i
							style={{ color: "#DF642B", width: "20px" }}
							class="fas fa-eye"
						></i>
						<i
							onClick={() => {
								setsubOpen(!subOpen);
							}}
							style={{
								color: "#526DAA",
								transform: subOpen ? "rotate(180deg)" : "",
							}}
							class="fas fa-caret-right"
						></i>
					</div>

					<div
						className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3"
						style={{ backgroundColor: "#EFF2F7" }}
					>
						<span className="font-weight-bold addWallet">
							Add new wallet
						</span>
						<i
							style={addSquare}
							class="far fa-plus-square ml-5"
						></i>
					</div>

					<List data={data} />
				</div>
			</div>
		</>
	);
}

export default Sidebar;
