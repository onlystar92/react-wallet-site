import React from "react";
import { selectData, setSettingsTab } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import Rectangle from "../../assets/Rectangle 337.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function SidebarMobile({ isOpen, setsubOpen, subOpen, setisOpen }) {
	const data = useSelector(selectData);
	const dispatch = useDispatch();
	return (
		<>
			<div
				className={`sidebar-container d-flex    text-left  ${
					!isOpen ? "sidebar-close-mobile" : "sidebar-open-mobile"
				}`}
			>
				<div className="innerContainer">
					<div className="d-flex align-items-center">
						<img
							width="50px"
							className="mr-3"
							src={Rectangle}
							alt=""
						/>
						<div>
							<div className="sidebar-profile-name">
								Adam Sydanus
							</div>
							<div className="sidebar-myaccount">My Account</div>
						</div>
					</div>
					<hr />
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

					<hr />
					<Link to="/help" className="dropdown-link">
						{" "}
						<div>
							<i class="mr-2 fas fa-question-circle"></i> Help
						</div>
					</Link>

					<Link
						onClick={() => {
							dispatch(setSettingsTab("General"));
						}}
						to="/settings"
						className="dropdown-link"
					>
						<div>
							<i class="mr-2 fas fa-cog"></i> Settings
						</div>
					</Link>
					<hr />
					<div className="dropdown-bottom">
						<i class="mr-2 fas fa-file-export"></i> Logout
					</div>
				</div>
			</div>

			<div
				className={`close-box ${
					isOpen ? "close-box-open" : "close-box-close"
				}`}
				onClick={() => setisOpen(false)}
			>
				<i class="fas fa-times"></i>
			</div>
		</>
	);
}

export default SidebarMobile;
