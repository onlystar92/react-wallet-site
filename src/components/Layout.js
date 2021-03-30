import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import IndividualValues from "./IndividualValues/IndividualValues";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Data from "../assets/SideBarItems";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import YieldFarming from "./YieldFarming";
import LaunchPool from "./LaunchPool/LaunchPoolContainer";
import AddressBook from "./AddressBook";
import SettingsContainer from "./Settings";
import IndividualLaunchPool from "./LaunchPool/IndividualLaunchPool";
import Help from "./Help/Help";
import Airdrops from "./Airdrops/Airdrops";
import "./Layout.css";
import SidebarMobile from "./Sidebar/SidebarMobile";

import WalletModal from "./Modal/WalletModal";
import EditModal from "./Modal/EditModal";
import DeleteModal from "./Modal/DeleteModal";

function Layout({ name = "dashboard" }) {
	const data = Data;
	const [isOpen, setisOpen] = useState(true);
	const [subOpen, setsubOpen] = useState(false);
	const [open, setopen] = useState(false);
	const [modal, setModal] = useState(0);

	let Component =
		name === "dashboard" ? (
			<Dashboard isOpen={isOpen} />
		) : name === "yield-farming" ? (
			<YieldFarming />
		) : name === "launch-pool" ? (
			<LaunchPool subOpen={subOpen} isOpen={isOpen} />
		) : name === "address-book" ? (
			<AddressBook modal={modal} setModal={setModal} />
		) : name === "settings" ? (
			<SettingsContainer />
		) : name === "launch-pool-individual" ? (
			<IndividualLaunchPool />
		) : name === "help" ? (
			<Help />
		) : name === "airdrops" ? (
			<Airdrops />
		) : (
			""
		);

	useEffect(() => {
		if (!isOpen) {
			setsubOpen(false);
		}
	}, [isOpen]);

	return (
		<div className="layout-container">
			<Navbar
				setisOpen={setisOpen}
				isOpen={isOpen}
				open={open}
				setopen={setopen}
			/>

			<div className="body" onClick={() => setopen(false)}>
				<div className="sidebar-mobile">
					{isOpen && <div className="modal-back"></div>}
					<SidebarMobile
						data={data}
						isOpen={isOpen}
						subOpen={subOpen}
						setsubOpen={setsubOpen}
						setisOpen={setisOpen}
					/>
				</div>
				<div
					className={`d-flex ${name === "dashboard"
						? "body-left-notdashboard"
						: "body-left-notdashboard"
						} `}
				>
					<div className="sidebar-desktop">
						<Sidebar
							data={data}
							isOpen={isOpen}
							subOpen={subOpen}
							setsubOpen={setsubOpen}
							modal={modal}
							setModal={setModal}
						/>
					</div>

					<IndividualValues
						data={data}
						subOpen={subOpen}
						setsubOpen={setsubOpen}
					/>
					{Component}
				</div>

				{/* {name === "dashboard" && <TransactionHistory />} */}
				{modal != 0 && <div className="modal-back"></div>}
				{modal == 1 && <WalletModal modal={modal} setModal={setModal} />}
				{modal == 2 && <EditModal modal={modal} setModal={setModal}/>}
				{modal == 3 && <DeleteModal modal={modal} setModal={setModal}/>}
			</div>
		</div>
	);
}

export default Layout;
