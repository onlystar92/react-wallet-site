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
				id: "1",
				icon: BNB,
				title: "BNB",
				description: "Binance Coin",
				items: [
					{
						id: "1.1",
						icon: L2L,
						title: "L2L",
						description: "2local",
					},
					{
						id: "1.2",
						icon: BUSD,
						title: "BUSD",
						description: "Binance USD",
					},
					{
						id: "1.3",
						icon: ETH,
						title: "BETH",
						description: "Binance ETH",
					},
				],
			},
			{
				id: "2",
				icon: BNB,
				title: "BNB",
				description: "Corporate Wallet",
				items: [
					{
						id: "2.1",
						icon: L2L,
						title: "L2L",
						description: "2local",
					},
					{
						id: "2.2",
						icon: ETH,
						title: "ETH",
						description: "Ethereum",
					},
					{
						id: "2.3",
						icon: USD,
						title: "USD",
						description: "USD",
					},
					{
						id: "2.4",
						icon: XLM,
						title: "XLM",
						description: "Stellars",
					},
					{
						id: "2.5",
						icon: BTC,
						title: "BTC",
						description: "Bitcoin",
					},
				],
			},
		],
	},
	{
		id: "3",
		icon: LaunchPool,
		title: "Launch Pool",
		items: [
			{ id: "3.1", icon: BNBL2L, title: "BNB", description: "L2L" },
			{ id: "3.2", icon: BETHL2L, title: "BETH", description: "L2L" },
			{ id: "3.3", icon: BUSDL2L, title: "BUSD", description: "L2L" },
		],
	},
	{
		id: "4",
		icon: YieldFarming,
		title: "Yield Farming",
		items: [
			{
				id: "4.1",
				icon: BNBL2L,
				title: "BNB",
				description: "L2L",
			},
		],
	},
	{
		id: "5",
		icon: AirDrop,
		title: "Airdrop",
		items: [
			{ id: "5.1", icon: L2L2Local, title: "L2L", description: "2local" },
		],
	},
];

export default data;
