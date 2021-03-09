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
import Layout from "./components/Layout";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Layout />
					</Route>
					<Route path="/card">
						<Card />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
