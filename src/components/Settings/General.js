import React from "react";

function GeneralRow({ head, desc, span, right }) {
	return (
		<>
			<div className="d-flex justify-content-between mt-3 mb-1">
				<div className="general-container-left">
					<div className="left-head">{head}</div>
					{head === "Wallet ID" && (
						<div className="general-container-right-mobile mb-3">
							{right}
						</div>
					)}

					<div className="left-desc">
						{desc}
						<span>{span}</span>
					</div>
				</div>
				{head === "Wallet ID" ? (
					<div className="general-container-right-top ">{right}</div>
				) : (
					<div className="general-container-right">{right}</div>
				)}
			</div>
			<hr className="mt-4" />
		</>
	);
}

function General() {
	return (
		<div className="general-container">
			<GeneralRow
				head="Wallet ID"
				desc="Wallet ID is your unique identifier. It is completely individual to you, and it is what you will use to log in and access your wallet. It is NOT a bitcoin address for sending or receiving."
				span=" Do not share your Wallet ID with others."
				right="1f3e897e-981c-4e02-b834-4a35cbb30d59"
			/>
			<GeneralRow
				head="Privacy Policy"
				desc="Read about the privacy and security of your personal information."
				span=""
				right={<i class="fas fa-external-link-alt external-icon"></i>}
			/>
			<GeneralRow
				head="Terms of Service"
				desc="Read our terms and services agreement."
				span=""
				right={<i class="fas fa-external-link-alt external-icon"></i>}
			/>
			<GeneralRow
				head="About us"
				desc="Learn more about our company."
				span=" Do not share your Wallet ID with others."
				right={<i class="fas fa-external-link-alt external-icon"></i>}
			/>
		</div>
	);
}

export default General;
