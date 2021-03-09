import { createSlice } from "@reduxjs/toolkit";
import Exchange from "../assets/2local exchange.png";
import LaunchPool from "../assets/Launchpad.png";
import YieldFarming from "../assets/Grow_plant.png";
import AirDrop from "../assets/Airdrop.png";
import ETH from "../assets/ETH.png";
import BNB from "../assets/BNB.png";
import BUSD from "../assets/busd.png";
import L2L from "../assets/2local_symbol_wht.png";
import USD from "../assets/usd-coin-usdc-logo.svg";
import XLM from "../assets/xlm.svg";
import BTC from "../assets/btc.svg";
import BNBL2L from "../assets/bnb-l2l.svg";
import BETHL2L from "../assets/beth-l2l.svg";
import BUSDL2L from "../assets/busd-l2l.svg";
import L2L2Local from "../assets/l2l-2local.svg";

export const slice = createSlice({
	name: "slice",
	initialState: {
		title: "",
		desc: "",
		icon: "",
		tab: "",
		sidebarActive: "",
		data: [
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
						show: true,
						individual: { left: "1.4224231", right: "$62,098.31" },
						items: [
							{
								id: "1.1",
								icon: L2L,
								title: "L2L",
								description: "2local",
								individual: {
									left: "1.4224231",
									right: "$62,098.31",
								},
							},
							{
								id: "1.2",
								icon: BUSD,
								title: "BUSD",
								description: "Binance USD",
								individual: {
									left: "1.4224231",
									right: "$62,098.31",
								},
							},
							{
								id: "1.3",
								icon: ETH,
								title: "BETH",
								description: "Binance ETH",
								individual: {
									left: "1.4224231",
									right: "$62,098.31",
								},
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
								individual: {
									left: "1.4224231",
									right: "$62,098.31",
								},
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
		],
	},
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload;
		},
		setDesc: (state, action) => {
			state.desc = action.payload;
		},
		setIcon: (state, action) => {
			state.icon = action.payload;
		},
		setTab: (state, action) => {
			state.tab = action.payload;
		},
		setSidebarActive: (state, action) => {
			state.sidebarActive = action.payload;
		},
		setListHeadCollapse: (state, action) => {
			state.listHeadCollapse = action.payload;
		},
		setData: (state, action) => {
			console.log("action", action);
			state.data = action.payload;
		},
		setListHeadShow: (state, action) => {
			state.data[action.payload.idx].show = action.payload.flag;
		},
		setSubListShow: (state, action) => {
			state.data[action.payload.idx1].items[action.payload.idx2].show =
				action.payload.flag;
		},
	},
});

export const selectTitle = (state) => state.slice.title;
export const selectDesc = (state) => state.slice.desc;
export const selectIcon = (state) => state.slice.icon;
export const selectTab = (state) => state.slice.tab;
export const selectSidebar = (state) => state.slice.sidebarActive;
export const selectData = (state) => state.slice.data;

export const {
	setTitle,
	setDesc,
	setIcon,
	setTab,
	setSidebarActive,
	setListHeadShow,
	setSubListShow,
	setData,
} = slice.actions;

export default slice.reducer;
