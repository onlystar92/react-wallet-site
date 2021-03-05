import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/2local logo wht.svg";
import Toggler from "../../assets/Group 7942.svg";
import Profile from "../../assets/Rectangle 337.png";
import Caret from "../../assets/caret.svg";
import Exchange from "../../assets/2local exchange.png";
import Launchpad from "../../assets/Launchpad.png";
import Airdrop from "../../assets/Airdrop.png";
import Grow_plant from "../../assets/Grow_plant.png";
import Dropdown from "./Dropdown";

function Navbar() {
	const [open, setopen] = useState(false);
	const path = typeof window !== undefined && window.location.pathname;

	console.log("history", window.location.pathname);

	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
				<div>
					<img className="mr-4" src={Toggler} alt="" />

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
							<a class="nav-link" href="/">
								Exchange
							</a>
						</li>
						<li class="nav-item font-weight-bold mr-3">
							<a class="nav-link" href="#">
								Launch Pool
							</a>
						</li>
						<li class="nav-item font-weight-bold mr-3">
							<a class="nav-link" href="#">
								Yield Farming
							</a>
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

				<div className="d-flex align-items-center">
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

		// <div className="navbar-container">
		// 	<div className="logo">
		// 		<img src={Logo} alt="" />
		// 	</div>

		// 	<div className="outer-div">
		// 		<div className="inner-div">
		// 			<img src={Exchange} alt="" />
		// 			<a href="" className="navbar-links">
		// 				Exchange
		// 			</a>
		// 		</div>

		// 		<div className="inner-div">
		// 			<img src={Grow_plant} alt="" />
		// 			<a href="" className="navbar-links">
		// 				Launch Pool
		// 			</a>
		// 		</div>

		// 		<div className="inner-div">
		// 			<img src={Exchange} alt="" />
		// 			<a href="" className="navbar-links">
		// 				Yield Farming
		// 			</a>
		// 		</div>

		// 		<div className="inner-div">
		// 			<img src={Airdrop} alt="" />
		// 			<a href="" className="navbar-links">
		// 				Airdrops
		// 			</a>
		// 		</div>

		// 		<div className="inner-div">
		// 			<img alt="" />
		// 			<a href="" className="navbar-links">
		// 				Address book
		// 			</a>
		// 		</div>
		// 	</div>
		// 	<div
		// 		onClick={() => {
		// 			setopen(!open);
		// 		}}
		// 		className="dropdown"
		// 	>
		// 		Antony
		// 		{open && <Dropdown />}
		// 	</div>
		// </div>
	);
}

export default Navbar;
