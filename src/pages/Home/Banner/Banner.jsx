import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from "../../../assets/banner/banner1.png";
import bannerimg2 from "../../../assets/banner/banner2.png";
import bannerimg3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";
import { FaArrowRight } from "react-icons/fa";

// 🌟 REUSABLE SLIDE COMPONENT
const BannerSlide = ({ img, text, position = "center" }) => {
  const positionClasses =
    position === "center"
      ? "top-1/2 -translate-y-1/2 left-3 sm:left-6 md:left-16 lg:left-24"
      : "bottom-2 left-2 sm:bottom-3 sm:left-4 md:left-6";

  return (
    <div className="relative">
      {/* Responsive Banner Image */}
      <img
        src={img}
        className="w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[550px] object-cover"
        alt="Banner"
      />

      <div
        className={`absolute ${positionClasses} 
        w-[88%] sm:w-[70%] md:w-[50%] lg:w-[45%] 
        space-y-4 sm:space-y-5 text-left`}
      >
        {/* TEXT USING --color-ptext */}
        <p className="text-ptext text-sm sm:text-base md:text-lg leading-relaxed font-medium">
          {text}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            className="bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold 
                       flex items-center gap-2 shadow-md hover:bg-[#b4d85c] transition text-sm sm:text-base"
          >
            Track Your Parcel <FaArrowRight />
          </button>

          <button
            className="border border-gray-400 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold 
                       hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Be A Rider
          </button>
        </div>
      </div>
    </div>
  );
};

// 🌟 MAIN BANNER COMPONENT
const Banner = () => {
  return (
    <div className="relative w-full">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <BannerSlide
          img={bannerimg1}
          text="From personal packages to business shipments — we deliver on time, every time."
          position="center"
        />

        <BannerSlide
          img={bannerimg2}
          text="Reliable delivery solutions for your business and personal needs."
          position="bottom"
        />

        <BannerSlide
          img={bannerimg3}
          text="Your parcels are handled with care from pickup to delivery."
          position="bottom"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
