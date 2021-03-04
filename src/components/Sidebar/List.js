import React from "react";
import "./List.css";

import ListHead from "./ListHead";
import Data from "../../assets/SideBarItems";

function List() {
	return (
		<div className="list-container">
			{Data.map((item) => (
				<ListHead
					icon={item.icon}
					title={item.title}
					items={item.items}
				/>
			))}
		</div>
	);
}

export default List;
