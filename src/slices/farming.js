import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "yield-farming",
	initialState: {
		data: [
			{
				id: "1",
				pool: "vBTC-BTCB Landing",
				pair: "vBTC-BTCB",
				totalValue: { value: 1182750504.02, percentage: 33.3 },
				rewardType: ["XVS"],
				loss: "None",
				apy: {
					yearly: 2.77,
					daily: 0.01,
				},
			},
			{
				id: "2",
				pool: "vBTC-BTCB Landing",
				pair: "vBTC-BTCB",
				totalValue: { value: 1182750504.02, percentage: 33.3 },
				rewardType: ["XVS"],
				loss: "None",
				apy: {
					yearly: 2.77,
					daily: 0.01,
				},
			},
			{
				id: "2",
				pool: "vBTC-BTCB Landing",
				pair: "vBTC-BTCB",
				totalValue: { value: 1182750504.02, percentage: 33.3 },
				rewardType: ["XVS"],
				loss: "None",
				apy: {
					yearly: 2.77,
					daily: 0.01,
				},
			},
		],
	},
});

const FarmingData = (state) => state.yieldFarming;

export const selectFarmingData = (key) =>
	createSelector(FarmingData, (farmingData) => farmingData[key]);

export default slice.reducer;
