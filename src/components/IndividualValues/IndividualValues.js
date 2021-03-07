import React from "react";
import "./IndividualValues.css";

function IndividualValues({ setsubOpen, subOpen }) {
	return (
		<div
			className={subOpen ? "container-open" : "container-close"}
			style={{ marginTop: "4rem", width: "144px", marginLeft: "1rem" }}
		>
			<div className="text-center">
				<i
					onClick={() => setsubOpen(false)}
					style={{
						color: "#FA1818",
						transform: "scale(2)",
						cursor: "pointer",
					}}
					class="fas fa-times"
				></i>
			</div>

			<div className="text-left mt-4">
				<div className="d-flex align-items-center">
					<div
						style={{
							display: "inline-block",
							height: "45px",
							width: "5px",
							backgroundColor: "#526DAA",
						}}
					></div>
					<span
						className=" font-weight-bold ml-2"
						style={{ fontSize: "12px", color: "#4C566C" }}
					>
						View your individual wallet balances here
					</span>
				</div>

				<div style={{ marginTop: "0.7rem", fontSize: "12px" }}>
					<div className="py-2" style={{ height: "40px" }}>
						<span
							className="font-weight-bold"
							style={{ color: "#4C566C" }}
						>
							1.4224231
						</span>
						<span
							className="font-weight-bold ml-2"
							style={{ color: "#A7ABB6" }}
						>
							$62,098.31
						</span>
					</div>
					<div className="py-2" style={{ height: "40px" }}>
						<span style={{ color: "#4C566C" }}>2000000</span>
						<span className="ml-2" style={{ color: "#A7ABB6" }}>
							$4000.00
						</span>
					</div>
					<div className="py-2" style={{ height: "40px" }}>
						<span style={{ color: "#4C566C" }}>2300</span>
						<span className="ml-2" style={{ color: "#A7ABB6" }}>
							$1400.00
						</span>
					</div>
					<div className="py-2" style={{ height: "40px" }}>
						<span style={{ color: "#4C566C" }}>461.90</span>
						<span className="ml-2" style={{ color: "#A7ABB6" }}>
							$456.90
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndividualValues;
