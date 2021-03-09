import React, { useEffect, useState } from "react";
import IndividualItems from "./IndividualItems";
import "./IndividualValues.css";

function IndividualValues({ setsubOpen, subOpen, data }) {
	const [show, setShow] = useState(data.map((a) => a.show));

	useEffect(() => {
		setShow(1);
		console.log("show", show);

		console.log("data", data);
	}, [data]);

	return (
		<div
			className={`individual-container ${
				subOpen ? "container-open" : "container-close"
			}`}
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

				{data.map((x) => (
					<div className="bottomDiv">
						{x.show ? (
							x.items.map((item) => (
								<IndividualItems
									items={item.items}
									left={item.individual.left}
									right={item.individual.right}
								/>
							))
						) : (
							<div className="bottomDiv"></div>
						)}
						{/* <div className="py-2 item-height">
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
					</div> */}
					</div>
				))}
			</div>
		</div>
	);
}

export default IndividualValues;
