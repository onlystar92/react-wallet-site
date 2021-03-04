import React from "react";
import "./List.css";
import Caret from "../../assets/caret.png";
import Exchange from "../../assets/2local exchange_color.png";

function List() {
	return (
		<div className="list-container">
			<div className="list-head">
				<img src={Exchange} alt="" />
				<p className="list-title">Exchange</p>
				<img className="caret" src={Caret} alt="" />
			</div>
			<div className="sublist">
				<div className="sublist-item">
					<span>BNB</span>
					<span className="item-desc">Binance Coin</span>
				</div>
				<div className="sublist-item">
					<span>BNB</span>
					<span className="item-desc">Binance Coin</span>
				</div>
				<div className="sublist-item">
					<span>BNB</span>
					<span className="item-desc">Binance Coin</span>
				</div>
			</div>
		</div>
	);
}

export default List;
