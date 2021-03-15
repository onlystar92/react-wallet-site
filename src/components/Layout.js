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

function Layout({ name = "dashboard" }) {
	const data = Data;
	const [isOpen, setisOpen] = useState(true);
	const [subOpen, setsubOpen] = useState(false);

	let Component =
		name === "dashboard" ? (
			<Dashboard isOpen={isOpen} />
		) : name === "yield-farming" ? (
			<YieldFarming />
		) : name === "launch-pool" ? (
			<LaunchPool subOpen={subOpen} isOpen={isOpen} />
		) : name === "address-book" ? (
			<AddressBook />
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
		<div>
			<Navbar setisOpen={setisOpen} isOpen={isOpen} />

			<div className="body">
				<div
					className={`d-flex ${
						name === "dashboard"
							? "body-left-notdashboard"
							: "body-left-notdashboard"
					} `}
				>
					<Sidebar
						data={data}
						isOpen={isOpen}
						subOpen={subOpen}
						setsubOpen={setsubOpen}
					/>

					<IndividualValues
						data={data}
						subOpen={subOpen}
						setsubOpen={setsubOpen}
					/>
					{Component}
				</div>

				{/* {name === "dashboard" && <TransactionHistory />} */}
			</div>
		</div>
	);
}

export default Layout;
