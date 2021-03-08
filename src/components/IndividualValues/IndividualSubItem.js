import React from "react";

function IndividualSubItem({ left, right }) {
	return (
		<div className="py-2 item-height">
			<span className="color-dark">{left}</span>
			<span className="ml-2 color-grey">{right}</span>
		</div>
	);
}

export default IndividualSubItem;
