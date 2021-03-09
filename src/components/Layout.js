import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import IndividualValues from "./IndividualValues/IndividualValues";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Data from "../assets/SideBarItems";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function Layout() {
	const data = Data;
	const [isOpen, setisOpen] = useState(true);
	const [subOpen, setsubOpen] = useState(false);

	console.log("subopen", subOpen);

	useEffect(() => {
		if (!isOpen) {
			setsubOpen(false);
		}
	}, [isOpen]);
	return (
		<div>
			<Navbar setisOpen={setisOpen} isOpen={isOpen} />

			<div className="body">
				<div className="d-flex body-left">
					<Sidebar
						isOpen={isOpen}
						subOpen={subOpen}
						setsubOpen={setsubOpen}
					/>

					<IndividualValues
						subOpen={subOpen}
						setsubOpen={setsubOpen}
					/>

					<Dashboard
						subOpen={subOpen}
						isOpen={isOpen}
						setsubOpen={setsubOpen}
					/>
				</div>

				<TransactionHistory />
			</div>
		</div>
	);
}

export default Layout;
