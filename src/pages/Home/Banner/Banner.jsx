import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowRight } from "react-icons/fa";

// Banner Images
import bannerimg3 from "../../../assets/banner/banner1.png";
import bannerimg2 from "../../../assets/banner/banner2.png";
import bannerimg1 from "../../../assets/banner/banner3.png";

// Slide Component
const BannerSlide = ({ img }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-white">

      {/* Banner Image */}
      <img
        src={img}
        alt="Banner"
        className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] object-cover"
      />

      {/* SMALL TRANSPARENT OVERLAY BOX */}
      <div
        className="
          absolute bottom-4 left-6        /* ↓ moved whole overlay lower */
          px-4 sm:px-5 md:px-6 
          py-3 sm:py-4 
          rounded-xl
          max-w-[70%] sm:max-w-[55%] md:max-w-[45%]
        "
      >
        {/* Description */}
        <p
          className="
            text-[#03373D] 
            text-left
            mt-7                /* ↓ moved text lower */
            text-xs sm:text-sm md:text-base 
            leading-relaxed
          "
        >
          Enjoy fast, reliable parcel delivery zero hassle —
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-5">
          <button
            className="
              bg-[#CAEB66] text-[#03373D] 
              px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
              text-xs sm:text-sm md:text-base
              rounded-full font-semibold 
              flex items-center gap-2 shadow-md 
              hover:bg-[#b4d85c] transition
            "
          >
            Track Your Parcel <FaArrowRight className="text-xs sm:text-sm" />
          </button>

          <button
            className="
              border border-[#03373D] text-[#03373D]
              px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
              text-xs sm:text-sm md:text-base
              rounded-full font-semibold 
              hover:bg-[#03373D]/10 transition
            "
          >
            Be A Rider
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Banner Component
const Banner = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={700}
        swipeable
        emulateTouch
      >
        <BannerSlide img={bannerimg1} />
        <BannerSlide img={bannerimg2} />
        <BannerSlide img={bannerimg3} />
      </Carousel>
    </div>
  );
};

export default Banner;
