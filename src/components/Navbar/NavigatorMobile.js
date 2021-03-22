import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";
import "./Navbar.css";

function SliderCard({ title, x }) {
	const path = typeof window !== undefined && window.location.pathname;

	const getActive = () => {
		if (path === x) {
			return "navbar-slider-active";
		}
	};

	return (
		<Link class={` navbar-slider ${getActive()} `} to={x}>
			{title}
		</Link>
	);
}

function Slider() {
	const [swiper, setSwiper] = useState(null);

	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

	useEffect(() => {
		console.log("swiper", swiper);
	}, [swiper]);

	return (
		<Swiper
			className="ml-4 pb-3"
			spaceBetween={20}
			slidesPerView={4}
			// navigation
			// pagination={{ clickable: true }}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Exchange" x="/" />
			</SwiperSlide>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Launch Pool" x="/launch-pool" />
			</SwiperSlide>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Yield Farming" x="/yield-farming" />
			</SwiperSlide>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Airdrops" x="/airdrops" />
			</SwiperSlide>
			<SwiperSlide className="slider-slide">
				<SliderCard title="Address Book" x="/address-book" />
			</SwiperSlide>
		</Swiper>
	);
}

function NavigatorMobile() {
	return <Slider />;
}

export default NavigatorMobile;
