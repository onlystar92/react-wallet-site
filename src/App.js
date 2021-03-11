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
					<Route path="/login">
						<Card name="login" />
					</Route>
					<Route path="/new-wallet">
						<Card name="new-wallet" />
					</Route>
					<Route path="/wallet-exchange">
						<Card name="wallet-exchange" />
					</Route>
					<Route path="/yield-farming">
						<Layout name="yield-farming" />
					</Route>
					<Route path="/launch-pool">
						<Layout name="launch-pool" />
					</Route>
					<Route path="/address-book">
						<Layout name="address-book" />
					</Route>
					<Route path="/settings">
						<Layout name="settings" />
					</Route>
					<Route path="/launch-pool-individual">
						<Layout name="launch-pool-individual" />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
