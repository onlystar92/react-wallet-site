import React from "react";
import "./IndividualValues.css";

function IndividualValues({ setsubOpen, subOpen }) {
	return (
		<div
			className={subOpen ? "container-open" : "container-close"}
			style={{
				marginTop: "4rem",
				width: "144px",
				marginLeft: "1rem",
				borderRadius: "12px",
				zIndex: "2",
			}}
		>
			<div className="text-center">
				<i
					onClick={() => setsubOpen(false)}
					class="fas fa-times cross"
				></i>
			</div>

			<div className="text-left mt-4">
				<div className="d-flex align-items-center">
					<div className="wrapper"></div>
					<span className=" font-weight-bold ml-2 text">
						View your individual wallet balances here
					</span>
				</div>

				<div className="bottomDiv">
					<div className="py-2 item-height">
						<span className="font-weight-bold color-dark">
							1.4224231
						</span>
						<span className="font-weight-bold ml-2 color-grey">
							$62,098.31
						</span>
					</div>
					<div className="py-2 item-height">
						<span className="color-dark">2000000</span>
						<span className="ml-2 color-grey">$4000.00</span>
					</div>
					<div className="py-2 item-height">
						<span className="color-dark">2300</span>
						<span className="ml-2 color-grey">$1400.00</span>
					</div>
					<div className="py-2 item-height">
						<span className="color-dark">461.90</span>
						<span className="ml-2 color-grey">$456.90</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndividualValues;