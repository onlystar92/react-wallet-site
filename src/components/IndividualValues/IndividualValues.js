import React from "react";
import IndividualItems from "./IndividualItems";
import "./IndividualValues.css";
import { selectData } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";

function IndividualValues({ setsubOpen, subOpen }) {
	const data = useSelector(selectData);
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
									show={item.show}
									items={item.items}
									left={item.individual.left}
									right={item.individual.right}
								/>
							))
						) : (
							<div className="bottomDiv"></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default IndividualValues;
