import React from "react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";
import reviews from "../../../../public/reviews.json"; // better to move this into src/, but this is fine if it works in your setup

const TestimonialSlider1 = () => {
  return (
    <div>
      {/* Heading + subtitle */}
      <div className="my-24">
        <div className="text-center mb-24">
          <h3 className="text-2xl md:text-3xl font-bold my-8 text-[#03373D]">
            Testimonials
          </h3>
          <p className="text-[#303030] text-sm md:text-base text-center max-w-2xl mx-auto mt-3">
            Hear what our customers say about our delivery service and how we
            help them deliver parcels safely and on time.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          scale: 0.85,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper py-10"
      >
        {reviews.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="pb-8">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider1;
