import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="body">
				<Sidebar />
				<Dashboard />
			</div>

			<Footer />
		</div>
	);
}

export default App;
