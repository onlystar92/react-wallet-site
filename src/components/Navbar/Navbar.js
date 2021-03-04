import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/2local logo wht.png";
import Exchange from "../../assets/2local exchange.png";
import Launchpad from "../../assets/Launchpad.png";
import Airdrop from "../../assets/Airdrop.png";
import Grow_plant from "../../assets/Grow_plant.png";
import Dropdown from "./Dropdown";

function Navbar() {
	const [open, setopen] = useState(false);

	return (
		<div className="navbar-container">
			<div>
				<img src={Logo} alt="" />
			</div>

			<div className="outer-div">
				<div className="inner-div">
					<img src={Exchange} alt="" />
					<a href="" className="navbar-links">
						Exchange
					</a>
				</div>

				<div className="inner-div">
					<img src={Grow_plant} alt="" />
					<a href="" className="navbar-links">
						Launch Pool
					</a>
				</div>

				<div className="inner-div">
					<img src={Exchange} alt="" />
					<a href="" className="navbar-links">
						Yield Farming
					</a>
				</div>

				<div className="inner-div">
					<img src={Airdrop} alt="" />
					<a href="" className="navbar-links">
						Airdrops
					</a>
				</div>

				<div className="inner-div">
					<img alt="" />
					<a href="" className="navbar-links">
						Address book
					</a>
				</div>
			</div>
			<div
				onClick={() => {
					setopen(!open);
				}}
				className="dropdown"
			>
				Antony
			</div>
			{open && <Dropdown />}
		</div>
	);
}

export default Navbar;
