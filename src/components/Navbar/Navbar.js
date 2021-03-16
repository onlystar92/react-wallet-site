import React, { useState } from "react";
import Logo from "../../assets/2local logo wht.svg";
import Toggler from "../../assets/Group 7942.svg";
import Profile from "../../assets/Rectangle 337.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar({ setisOpen, isOpen }) {
	const [open, setopen] = useState(false);
	const path = typeof window !== undefined && window.location.pathname;

	console.log("history", window.location.pathname);

	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light d-flex pt-3 pb-3 navbar-container">
				<div className="inner-nav d-flex align-items-center">
					<img
						onClick={() => setisOpen(!isOpen)}
						className="mr-2 brand"
						src={Toggler}
						width="50px"
						alt=""
					/>

					<NavLink className="nav-link" to="/">
						<img src={Logo} alt="" width="90px" />
					</NavLink>
				</div>

				<div id="navbarText">
					<ul class="navbar-nav mr-auto ">
						<li
							class={`nav-item font-weight-bold mr-2 ${
								path === "/" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/">
								Exchange
							</NavLink>
						</li>
						<li
							class={`nav-item font-weight-bold mr-2 ${
								path === "/launch-pool" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/launch-pool">
								Launch Pool
							</NavLink>
						</li>
						<li
							class={`nav-item font-weight-bold mr-2 ${
								path === "/yield-farming" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/yield-farming">
								Yield Farming
							</NavLink>
						</li>
						<li
							class={`nav-item font-weight-bold mr-2 ${
								path === "/airdrops" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/airdrops">
								Airdrops
							</NavLink>
						</li>
						<li
							class={`nav-item font-weight-bold mr-2 ${
								path === "/address-book" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/address-book">
								Address Book
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="d-flex align-items-center nav-right">
					<div className="text-left mx-3">
						<button className="mr-4 connect-wallet-btn">
							Connect Wallet
						</button>
						<img className="mr-4" src={Profile} alt="" />
						<span className="m-0 mb-1 font-weight-bold profile">
							Adam Sydanus{" "}
						</span>
						<i
							onClick={() => {
								setopen(!open);
							}}
							style={{
								transform: open
									? "scale(1.5) rotate(180deg)"
									: "",
							}}
							class="ml-2 fas fa-caret-down caret-color"
						></i>
					</div>
				</div>
			</nav>
			{open && <Dropdown />}
		</>
	);
}

export default Navbar;
