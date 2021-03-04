import Exchange from "./2local exchange_color.png";
import LaunchPool from "./launchpad_color.png";
import YieldFarming from "./Grow_plant_color.png";
import AirDrop from "./Airdrop_color.png";
import ETH from "./ETH.png";
import BNB from "./BNB.png";
import BUSD from "./busd.png";
import L2L from "./2local_symbol_wht.png";

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
					{ title: "USD", description: "USD" },
					{ title: "XLM", description: "Stellars" },
					{ title: "BTC", description: "Bitcoin" },
				],
			},
		],
	},
	{
		icon: LaunchPool,
		title: "Launch Pool",
		items: [
			{ title: "BNB", description: "L2L" },
			{ title: "BETH", description: "L2L" },
			{ title: "BUSD", description: "L2L" },
		],
	},
	{
		icon: YieldFarming,
		title: "Yield Farming",
		items: [{ title: "BNB", description: "L2L" }],
	},
	{
		icon: AirDrop,
		title: "Airdrop",
		items: [{ title: "L2L", description: "2local" }],
	},
];

export default data;
