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
		show: true,
		items: [
			{
				id: "1",
				icon: BNB,
				title: "BNB",
				description: "Binance Coin",
				individual: { left: "1.4224231", right: "$62,098.31" },
				show: true,

				items: [
					{
						id: "1.1",
						icon: L2L,
						title: "L2L",
						description: "2local",
						individual: { left: "1.4224231", right: "$62,098.31" },
					},
					{
						id: "1.2",
						icon: BUSD,
						title: "BUSD",
						description: "Binance USD",
						individual: { left: "1.4224231", right: "$62,098.31" },
					},
					{
						id: "1.3",
						icon: ETH,
						title: "BETH",
						description: "Binance ETH",
						individual: { left: "1.4224231", right: "$62,098.31" },
					},
				],
			},
			{
				id: "2",
				icon: BNB,
				title: "BNB",
				description: "Corporate Wallet",
				individual: { left: "1.4224231", right: "$62,098.31" },
				show: true,

				items: [
					{
						id: "2.1",
						icon: L2L,
						title: "L2L",
						description: "2local",
						individual: { left: "1.4224231", right: "$62,098.31" },
					},
				],
			},
			{
				id: "2.2",
				icon: ETH,
				title: "ETH",
				description: "Ethereum",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
			{
				id: "2.3",
				icon: USD,
				title: "USD",
				description: "USD",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
			{
				id: "2.4",
				icon: XLM,
				title: "XLM",
				description: "Stellars",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
			{
				id: "2.5",
				icon: BTC,
				title: "BTC",
				description: "Bitcoin",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
		],
	},
	{
		id: "3",
		icon: LaunchPool,
		title: "Launch Pool",
		show: true,

		items: [
			{
				id: "3.1",
				icon: BNBL2L,
				title: "BNB",
				description: "L2L",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
			{
				id: "3.2",
				icon: BETHL2L,
				title: "BETH",
				description: "L2L",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
			{
				id: "3.3",
				icon: BUSDL2L,
				title: "BUSD",
				description: "L2L",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
		],
	},
	{
		id: "4",
		icon: YieldFarming,
		title: "Yield Farming",
		show: true,

		items: [
			{
				id: "4.1",
				icon: BNBL2L,
				title: "BNB",
				description: "L2L",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
		],
	},
	{
		id: "5",
		icon: AirDrop,
		title: "Airdrop",
		show: true,

		items: [
			{
				id: "5.1",
				icon: L2L2Local,
				title: "L2L",
				description: "2local",
				individual: { left: "1.4224231", right: "$62,098.31" },
			},
		],
	},
];

export default data;
