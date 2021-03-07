import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Data from "./assets/SideBarItems";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import IndividualValues from "./components/IndividualValues/IndividualValues";
import Card from "./components/Cards/CardContainer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
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
		<Router>
			<div className="App">
				<Navbar setisOpen={setisOpen} isOpen={isOpen} />
				<div className="body">
					<div className="d-flex body-left">
						<Sidebar
							data={data}
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

				{/* <Footer /> */}

				<Switch>
					<Route path="/card">
						<Card />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
