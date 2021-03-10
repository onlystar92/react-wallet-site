import React, { useState } from "react";
import Logo from "../../assets/2local logo wht.svg";
import Toggler from "../../assets/Group 7942.svg";
import Profile from "../../assets/Rectangle 337.png";
import Caret from "../../assets/caret.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ setisOpen, isOpen }) {
	const [open, setopen] = useState(false);
	const path = typeof window !== undefined && window.location.pathname;

	console.log("history", window.location.pathname);

	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light d-flex pt-4 pb-4 navbar-container">
				<div className="inner-nav">
					<img
						onClick={() => setisOpen(!isOpen)}
						className="mr-4 brand"
						src={Toggler}
						alt=""
					/>

					<a class="navbar-brand" href="#">
						<img src={Logo} alt="" />
					</a>
				</div>

				<div id="navbarText">
					<ul class="navbar-nav mr-auto ">
						<li
							class={`nav-item font-weight-bold mr-3 ${
								path === "/" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/">
								Exchange
							</NavLink>
						</li>
						<li
							class={`nav-item font-weight-bold mr-3 ${
								path === "/launch-pool" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/launch-pool">
								Launch Pool
							</NavLink>
						</li>
						<li
							class={`nav-item font-weight-bold mr-3 ${
								path === "/yield-farming" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/yield-farming">
								Yield Farming
							</NavLink>
						</li>
						<li class="nav-item font-weight-bold mr-3">
							<a class="nav-link" href="#">
								Airdrops
							</a>
						</li>
						<li class="nav-item font-weight-bold mr-3">
							<a class="nav-link" href="#">
								Address Book
							</a>
						</li>
					</ul>
				</div>

				<div className="d-flex align-items-center nav-right">
					<img src={Profile} alt="" />
					<div className="text-left mx-3">
						<p className="m-0 mb-1 font-weight-bold">
							Adam Sydanus{" "}
							<img className="ml-2" src={Caret} alt="" />
						</p>
						<p className="m-0 ">0x7…b78707</p>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
