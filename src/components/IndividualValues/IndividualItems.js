import React from "react";
import "./IndividualValues.css";
import IndivudalSubItem from "./IndividualSubItem";

function IndividualItems({ left, right, items, show }) {
	console.log("items", items);
	return (
		<>
			<div className="py-2 item-height">
				<span className="font-weight-bold color-dark">{left}</span>
				<span className="font-weight-bold ml-2 color-grey">
					{right}
				</span>
			</div>
			{items &&
				show &&
				items.map((item) => (
					<IndivudalSubItem
						left={item.individual.left}
						right={item.individual.right}
					/>
				))}
		</>
	);
}

export default IndividualItems;
