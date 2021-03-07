import Exchange from "./2local exchange.png";
import LaunchPool from "./Launchpad.png";
import YieldFarming from "./Grow_plant.png";
import AirDrop from "./Airdrop.png";
import ETH from "./ETH.png";
import BNB from "./BNB.png";
import BUSD from "./busd.png";
import L2L from "./2local_symbol_wht.png";
import USD from "./usd-coin-usdc-logo.svg";
import XLM from "./xlm.svg";
import BTC from "./btc.svg";
import BNBL2L from "./bnb-l2l.svg";
import BETHL2L from "./beth-l2l.svg";
import BUSDL2L from "./busd-l2l.svg";
import L2L2Local from "./l2l-2local.svg";

const data = [
	{
		icon: Exchange,
		title: "Exchange",
		items: [
			{
				icon: BNB,
				title: "BNB",
				description: "Binance Coin",
				items: [
					{ icon: L2L, title: "L2L", description: "2local" },
					{ icon: BUSD, title: "BUSD", description: "Binance USD" },
					{ icon: ETH, title: "BETH", description: "Binance ETH" },
				],
			},
			{
				icon: BNB,
				title: "BNB",
				description: "Corporate Wallet",
				items: [
					{ icon: L2L, title: "L2L", description: "2local" },
					{ icon: ETH, title: "ETH", description: "Ethereum" },
					{ icon: USD, title: "USD", description: "USD" },
					{ icon: XLM, title: "XLM", description: "Stellars" },
					{ icon: BTC, title: "BTC", description: "Bitcoin" },
				],
			},
		],
	},
	{
		icon: LaunchPool,
		title: "Launch Pool",
		items: [
			{ icon: BNBL2L, title: "BNB", description: "L2L" },
			{ icon: BETHL2L, title: "BETH", description: "L2L" },
			{ icon: BUSDL2L, title: "BUSD", description: "L2L" },
		],
	},
	{
		icon: YieldFarming,
		title: "Yield Farming",
		items: [{ icon: BNBL2L, title: "BNB", description: "L2L" }],
	},
	{
		icon: AirDrop,
		title: "Airdrop",
		items: [{ icon: L2L2Local, title: "L2L", description: "2local" }],
	},
];

export default data;
