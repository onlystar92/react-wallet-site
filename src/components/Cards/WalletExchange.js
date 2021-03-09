import React from "react";
import Logo from "../../assets/2local logo wht.png";

function WalletExchange() {
	return (
		<div className="wallet-exchange-container">
			<img className="wallet-exchange-logo" src={Logo} alt="" />
			<div className="buy-sell-store">
				Securely Buy, Sell, and Store Crypto.
			</div>
			<div className="get-started">Get Started by Signing Up Now.</div>
			<div className="cards-container">
				<div>
					<div className="wallet-exchange-card">
						<div>
							<img src="" alt="" />
							<span className="wallet-exchange-head">Wallet</span>
						</div>
						<div className="be-your-own">Be Your Own Bank</div>
						<p>
							Easily buy and sell Bitcoin, Ether and more.
							Securely store your crypto on mobile and desktop.
							Control your money by holding your private keys.
						</p>
						<button className="login-btn ">Create Wallet</button>
					</div>
					<div className="login-card-no-wallet">
						Already have a Wallet? <span>Log in</span>{" "}
					</div>
				</div>
				<div className="wallet-exchange-card">
					<div>
						<img src="" alt="" />
						<span className="wallet-exchange-head">Exchange</span>
					</div>
					<div className="be-your-own">
						The world’s most trusted crypto exchange.
					</div>
					<p>
						Lightning-fast trades mean you get the best price. Many
						trading pairs including USD, GBP and EUR. Control your
						money by connecting your Wallet.
					</p>
					<button className="btn-orange">
						Create an exchange account
					</button>
				</div>
			</div>
		</div>
	);
}

export default WalletExchange;
