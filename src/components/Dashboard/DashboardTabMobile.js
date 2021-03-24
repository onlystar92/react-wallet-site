import React from "react";
import "./Dashboard.css";
import { setTab, selectTab } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

function SliderCard({ title }) {
	const dispatch = useDispatch();
	const tab = useSelector(selectTab);
	const getActive = (item) => {
		if (item === tab) {
			return "tab-active";
		} else {
			return "tab-inactive";
		}
	};

	return (
		<div
			className={getActive(title)}
			onClick={() => {
				dispatch(setTab(title));
			}}
		>
			{title}
		</div>
	);
}

function DashboardTab() {
	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={3}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Send" />
			</SwiperSlide>{" "}
			<SwiperSlide className="slider-slide">
				<SliderCard title="Receive" />
			</SwiperSlide>{" "}
			<SwiperSlide className="slider-slide">
				<SliderCard title="Buy" />
			</SwiperSlide>{" "}
			<SwiperSlide className="slider-slide">
				<SliderCard title="Sell" />
			</SwiperSlide>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Swap" />
			</SwiperSlide>{" "}
			<SwiperSlide className="slider-slide">
				<SliderCard title="Staking" />
			</SwiperSlide>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Transaction History" />
			</SwiperSlide>
		</Swiper>
	);
}

export default DashboardTab;
