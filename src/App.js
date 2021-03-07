import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Data from "./assets/SideBarItems";
import { useState } from "react";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
	const data = Data;
	const [isOpen, setisOpen] = useState(true);
	const [subOpen, setsubOpen] = useState(false);
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);

	var x = data[counter1].items[counter2].items
		? data[counter1].items[counter2].items[counter3]
		: data[counter1].items
		? data[counter1].items[counter2]
		: "";

	console.log("counter1", counter1);
	console.log("counter2", counter2);
	console.log("counter3", counter3);

	console.log("x", x.title, x.description);

	console.log("subopen", subOpen);

	return (
		<div className="App">
			<Navbar setisOpen={setisOpen} isOpen={isOpen} />
			<div className="body">
				<Sidebar
					data={data}
					isOpen={isOpen}
					subOpen={subOpen}
					setsubOpen={setsubOpen}
					setCounter1={setCounter1}
					setCounter2={setCounter2}
					setCounter3={setCounter3}
				/>
				<div
					className={`d-flex justify-content-between ${
						!isOpen ? "body-right-close" : "body-right-open"
					}`}
				>
					<Dashboard
						title={x.title}
						description={x.description}
						icon={x.icon}
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
