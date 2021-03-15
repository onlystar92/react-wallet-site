import React from "react";
import { selectData } from "../../slices/slice";
import { useSelector } from "react-redux";
import List from "./List";
import "./Sidebar.css";

function Sidebar({ isOpen, setsubOpen, subOpen }) {
	const data = useSelector(selectData);
	return (
		<>
			<div
				className={`sidebar-container d-flex   ml-3 text-left pt-4 ${
					!isOpen ? "sidebar-close" : "sidebar-open"
				}`}
			>
				<div className="innerContainer">
					<div className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3">
						<div className="balanceStyle">Total Balance</div>
						<div className="font-weight-bold balanceAmount">
							$137.17
						</div>
						<i class="fas fa-eye eye"></i>
						<i
							onClick={() => {
								setsubOpen(!subOpen);
							}}
							style={{
								color: "#53A8F0",
								transform: subOpen ? "rotate(180deg)" : "",
							}}
							class="fas fa-caret-right"
						></i>
					</div>

					<div className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3 wallet">
						<span className="font-weight-bold addWallet">
							Add new wallet
						</span>
						<i class="far fa-plus-square ml-5 addSquare"></i>
					</div>

					<List data={data} />
				</div>
			</div>
		</>
	);
}

export default Sidebar;
