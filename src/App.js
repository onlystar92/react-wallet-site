import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Data from "./assets/SideBarItems";
import { useEffect, useState } from "react";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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
		<div className="App">
			<Navbar setisOpen={setisOpen} isOpen={isOpen} />
			<div className="body">
				<Sidebar
					data={data}
					isOpen={isOpen}
					subOpen={subOpen}
					setsubOpen={setsubOpen}
				/>

				<Dashboard
					subOpen={subOpen}
					isOpen={isOpen}
					setsubOpen={setsubOpen}
				/>

				<TransactionHistory />
			</div>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
