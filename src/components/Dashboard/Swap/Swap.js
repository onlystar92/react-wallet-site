import React, {useState} from "react";
import "./styles.css";
import ETH from "../../../assets/ETH.svg";
import Bdot from "../../../assets/Group 7925.svg";

function BlockElement({ back, imgURL, unit, totalAmount, realAmount }) {
	return (<div className="block" style={{ background: back }}>
		<div className="inner-container">
			<img className="container-img" src={imgURL} />
			<h2 className="inner-title">{unit}</h2>
			<button className="right-side-btn">
				<i className="fas fa-caret-down" />
			</button>
			<p className="info">{totalAmount}<span>{realAmount + " USD"}</span></p>
		</div>
	</div>);
}

function NumberController({dValue, step, divNum=1, suffix=""}){
	const [cValue, setCValue] = useState(dValue);
	return(
		<>
			<span className="bottom-text">{cValue/divNum + suffix}</span>
			<span className="spinner-button">
				<i className="fa fa-caret-up spinner-up" onClick={()=>setCValue(cValue + step)}/>
				<i className="fa fa-caret-down spinner-down" onClick={()=>setCValue(cValue - step)}/>
			</span>
		</>
	)
}

function Swap() {
	return (
		<div className="swaping-container">
			<div className="flex-container">
				<div className="block-container">
					<h2 className="header-text">From</h2>
					<BlockElement back="transparent linear-gradient(292deg, #53A8F0 0%, #2D7FC4 100%) 0% 0% no-repeat padding-box"
						imgURL={ETH}
						unit="ETH"
						totalAmount="4ETH"
						realAmount="5849.20"
					/>
					<div className="web-bottom-info">
						<h3 className="bottom-header">
							Slippage Tolerane
				</h3>
						<p>
							<span className="bottom-text">0.1%</span>
							<span className="bottom-text lft-margin">0.5%</span>
							<span className="bottom-text active lft-margin">1.0%</span>
							{/* <span className="bottom-text lft-margin">1.0%</span> */}
							<NumberController step={1} dValue={10} divNum={10} suffix="%" />
						</p>
					</div>
				</div>
				<div className="between-container">
					<div className="center-button">
						<i className="fa fa-angle-left" />
						<i className="fa fa-angle-right" />
					</div>
				</div>
				<div className="block-container">
					<h2 className="header-text">To</h2>
					<BlockElement back="transparent linear-gradient(112deg, #ED8D34 0%, #EBAD6B 100%) 0% 0% no-repeat padding-box"
						imgURL={Bdot}
						unit="BTC"
						totalAmount="0.12BTC"
						realAmount="5690.17"
					/>
					<div className="web-bottom-info">
						<h3 className="bottom-header">
							Transaction Deadline
				</h3>
						<p>
							{/* <span className="bottom-text">20</span> */}
							<NumberController step={1} dValue={20} divNum={1} />
							<span className="bottom-text lft-margin">Minutes</span>
						</p>
					</div>
				</div>
			</div>
			<div className="mobile-bottom-info">
				<h3 className="bottom-header">
					Slippage Tolerane
				</h3>
				<p>
					<span className="bottom-text">0.1%</span>
					<span className="bottom-text lft-margin">0.5%</span>
					<span className="bottom-text active lft-margin">1.0%</span>
					{/* <span className="bottom-text lft-margin">1.0%</span> */}
					<NumberController step={1} dValue={10} divNum={10} suffix="%" />
				</p>
			</div>
			<div className="mobile-bottom-info">
				<h3 className="bottom-header">
					Transaction Deadline
				</h3>
				<p>
					{/* <span className="bottom-text">20</span> */}
					<NumberController step={1} dValue={20} divNum={1} />
					<span className="bottom-text lft-margin">Minutes</span>
				</p>
			</div>
			<div className='change-line' />
			<button className="swap-button">Swap</button>
		</div>
	);
}

export default Swap;
