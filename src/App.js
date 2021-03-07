import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Data from "./assets/SideBarItems";
import { useEffect, useState } from "react";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import IndividualValues from "./components/IndividualValues/IndividualValues";

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
				<div className="d-flex " style={{ width: "74%" }}>
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
		</div>
	);
}

export default App;
