import React from "react";
import General from "./General";
import "./styles.css";
import { setSettingsTab, selectSettingsTab } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";
import Password from "./Password";
import Profile from "./Profile";

function Navigator() {
	const dispatch = useDispatch();
	const tab = useSelector(selectSettingsTab);
	const getActive = (item) => {
		if (item === tab) {
			return "settings-tab-active";
		}
	};
	return (
		<>
			<div className="settings-tab d-flex">
				<div
					onClick={() => {
						dispatch(setSettingsTab("General"));
					}}
					className={getActive("General")}
				>
					General
				</div>
				<div
					className={getActive("Profile")}
					onClick={() => {
						dispatch(setSettingsTab("Profile"));
					}}
				>
					{" "}
					Profile
				</div>
				<div
					className={getActive("Password")}
					onClick={() => {
						dispatch(setSettingsTab("Password"));
					}}
				>
					{" "}
					Password
				</div>
				<div
					className={getActive("KYC")}
					onClick={() => {
						dispatch(setSettingsTab("KYC"));
					}}
				>
					{" "}
					KYC
				</div>
				<div
					className={getActive("Preferences")}
					onClick={() => {
						dispatch(setSettingsTab("Preferences"));
					}}
				>
					{" "}
					Preferences
				</div>
			</div>

			<hr className="mt-4 settings-line" />
		</>
	);
}

function SettingsContainer() {
	const tab = useSelector(selectSettingsTab);

	return (
		<div className="text-left settings-container">
			<h1 className="settings-head">Settings</h1>
			<div className="settings-bottom mt-4 pb-5">
				<Navigator />
				{tab === "General" ? (
					<General />
				) : tab === "Password" ? (
					<Password />
				) : tab === "Profile" ? (
					<Profile />
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default SettingsContainer;
