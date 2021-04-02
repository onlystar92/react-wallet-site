import React, { useState } from "react";
import Logo from "../../assets/2local logo wht.svg";
import Toggler from "../../assets/Group 7942.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import NavigatorMobile from "./NavigatorMobile";

const Profile = "https://eu.ui-avatars.com/api/?name=Adam+Sydanus&background=edf6fd&color=53A8F0&font-size=0.33&bold=true&size=56";

function Navbar({ setisOpen, isOpen, open, setopen, modal, setModal }) {
	const path = typeof window !== undefined && window.location.pathname;

	console.log("history", window.location.pathname);

	return (
		<div className="navbar-container">
			<nav class="navbar navbar-expand-lg navbar-light d-flex pt-3 pb-3 ">
				<div className="inner-nav d-flex align-items-center">
					<img
						onClick={() => setisOpen(!isOpen)}
						className="mr-2 brand"
						src={Toggler}
						width="50px"
						alt=""
					/>

					<NavLink className="nav-link" to="/">
						<img
							className="brand-logo"
							src={Logo}
							alt=""
							width="90px"
						/>
					</NavLink>
				</div>

				<div className="navbarText">
					<ul class="navbar-nav mr-auto ">
						<li
							class={`nav-item font-weight-bold mr-2 ${
								path === "/exchange" && "active"
							}`}
						>
							<NavLink className="nav-link" to="/exchange">
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
					<div className="text-left mx-xs-3 d-flex">
						<button className="mr-sm-4 connect-wallet-btn" onClick={() => setModal(5)}>
							Connect Wallet
						</button>
						<div className=" profile-right">
							<img className="mr-4 profile-img-avatar" src= {Profile} alt="" />
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
				</div>
			</nav>
			<div className="topbar-navigator-mobile ">
				<NavigatorMobile />
			</div>
			{open && <Dropdown setopen={setopen} />}
		</div>
	);
}

export default Navbar;
