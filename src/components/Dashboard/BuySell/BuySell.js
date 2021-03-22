import React, { useEffect, useState } from "react";
import BTC from "../../../assets/btc.svg";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Ether from "../../../assets/ETH.png";

function SliderCard({ rate, color }) {
	const [x, setx] = useState("slider-cards-container");
	const getActive = () => {
		setx("slider-cards-container-active");
	};
	return (
		<div className={` slider-cards-container`} onClick={() => getActive()}>
			<div className="d-flex  align-items-center">
				<img src={BTC} alt="" />
				<span className="ml-2 slider-cards-span ">Bitcoin</span>
			</div>

			<div className="slider-card-value">
				$56,902.43{" "}
				<span style={{ color: color, fontSize: "10px" }}>{rate}</span>
			</div>
		</div>
	);
}

function Dropdown({ icon, data }) {
	return (
		<div className="send-dropdown-container mr-3">
			<div class="dropdown">
				<button
					class="text-left d-flex justify-content-between align-items-center pr-4  sell-dropdown-container dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<div className="d-flex align-items-center ml-3">
						{icon && <img className="mr-3" src={icon} alt="" />}
						{data[0].content}
					</div>

					<i class="fas fa-caret-down caret-dropdown"></i>
				</button>
				<div
					class="dropdown-menu send-dropdown-select"
					aria-labelledby="dropdownMenuButton"
				>
					{data.map((x) => (
						<a class="dropdown-item" href="#">
							<div className="d-flex align-items-center">
								{x.icon && (
									<img className="mr-3" src={x.icon} alt="" />
								)}
								{x.content}
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

function BuySellBox({ dropdown, label, icon, sub }) {
	return (
		<div className="buy-sell-box d-flex  align-items-center pl-4 pr-4">
			<input type="radio" name="buy-sell-radio" />
			{icon && <img className="ml-3" src={icon} alt="" />}
			<div className="d-flex flex-column ml-3">
				<label htmlFor="" className="mt-0  mb-0">
					{label}
				</label>
				{sub && <p className=" buy-sell-sub">{sub}</p>}
			</div>
		</div>
	);
}

function Slider() {
	const [swiper, setSwiper] = useState(null);
	const [isEnd, setIsEnd] = useState(true);
	const [isBeginning, setIsBeginning] = useState(false);

	const goNext = () => {
		if (swiper) {
			console.log("next");
			swiper.slideNext();
		}
	};
	const goback = () => {
		if (swiper) {
			swiper.slidePrev();
		}
	};
	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

	useEffect(() => {
		console.log("swiper", swiper);
	}, [swiper]);

	return (
		<>
			<div className="swiper-container mt-5">
				<Swiper
					onSwiper={(s) => {
						setSwiper(s);
						setIsBeginning(s.isBeginning);
						setIsEnd(s.isEnd);
						console.log("SWIPER", s);
					}}
					onSlideChange={(s) => {
						console.log("ON s CHANGE", s);
						setIsBeginning(s.isBeginning);
						setIsEnd(s.isEnd);
					}}
					spaceBetween={25}
					slidesPerView={6}
					onSlideChange={() => console.log("slide change")}
				>
					<SwiperSlide>
						<SliderCard rate="+1.16%" color="#31A629" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<SliderCard rate="-1.46%" color="#FF3131" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<SliderCard rate="+0.30%" color="#31A629" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<SliderCard rate="+1.16%" color="#31A629" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<SliderCard rate="-3.48%" color="#FF3131" />
					</SwiperSlide>
					<SwiperSlide>
						<SliderCard rate="+0.30%" color="#31A629" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<SliderCard rate="+1.16%" color="#31A629" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<SliderCard rate="-3.48%" color="#FF3131" />
					</SwiperSlide>
				</Swiper>

				<hr className="mt-5" />
			</div>

			<div className="navigation-btns">
				<span
					disabled={isBeginning}
					className="custom-swiper-button "
					onClick={goback}
				>
					<i class="fas fa-angle-left"></i>
				</span>
				<span
					disabled={isEnd}
					className="custom-swiper-button skewed"
					onClick={goNext}
				>
					<i class="fas fa-angle-left"></i>
				</span>
			</div>
		</>
	);
}

function BuySell({ tab }) {
	return (
		<div className="buy-sell-container">
			<Slider />
			<div className="mt-3 d-flex flex-column  align-items-center">
				<div className="row">
					<div className="col"></div>
					<div className="col text-center d-flex align-items-center justify-content-center">
						<span className=" buy-sell-span">$</span>
						<input
							placeholder="12"
							className=" buy-sell-input"
							type="text"
						/>
					</div>

					<span className="col mt-4">
						<i class="fas fa-caret-left buy-sell-caret"></i>
						<i class="fas fa-caret-right buy-sell-caret"></i>

						<span className="bottom-value ml-3">
							0.00020206 BTC
						</span>
					</span>
				</div>

				<div className="mt-4 font-weight-bold">
					{tab === "Sell" ? "I will receive in" : "Payment methods"}
				</div>
				<div className="d-flex mt-4 buy-sell-bottom">
					{tab === "Sell" ? (
						<>
							<BuySellBox label="Credit or Debit Card" />
							<Dropdown
								icon={BTC}
								data={[{ icon: BTC, content: "Bitcoin" }]}
							/>
						</>
					) : (
						<>
							<BuySellBox
								label="Credit or Debit Card"
								sub="Instanly Available"
							/>
							<BuySellBox
								label="Wire Transfer"
								sub="3 to 5 business days"
								dropdown
							/>
						</>
					)}
				</div>

				<button className="buy-sell-btn">Continue</button>
			</div>
		</div>
	);
}

export default BuySell;
