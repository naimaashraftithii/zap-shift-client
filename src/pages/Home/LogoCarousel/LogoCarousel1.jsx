"use client";

import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import casioLogo from "../../../assets/brands/casio.png";
import amazonLogo from "../../../assets/brands/amazon.png";
import moonstarLogo from "../../../assets/brands/moonstar.png";
import starplusLogo from "../../../assets/brands/amazon_vector.png";
import startpeopleLogo from "../../../assets/brands/start_people.png";
import randstadLogo from "../../../assets/brands/randstad.png";

const brandLogos = [
  casioLogo,
  amazonLogo,
  moonstarLogo,
  starplusLogo,
  startpeopleLogo,
  randstadLogo,
];

const LogoCarousel1 = () => {
  return (
    <div className="py-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        grabCursor
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={logo}
              alt="brand logo"
              className="w-32 h-16 object-contain opacity-80 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel1;
