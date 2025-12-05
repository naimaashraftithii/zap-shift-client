import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahmed",
    role: "CTO",
    quote:
      "The delivery is always on time, and the tracking feature gives us full confidence about where our parcels are at every moment.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    quote:
      "Their reliable logistics service has helped us scale our operations nationwide without worrying about shipping delays.",
  },
  {
    name: "Mim Akter",
    role: "E-commerce Merchant",
    quote:
      "ZapShift’s courier service has made our dispatch process smoother and more efficient than ever before.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        {/* Slider wrapper with soft pink background like your design */}
        <div
          className="rounded-3xl border-y border-dashed border-[#C9C9C9] bg-[#F7E6E7] px-4 sm:px-6 md:px-10 py-10 md:py-12"
        >
          <Swiper
            className="testimonial-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 2.4 },
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full bg-[#FFEDED]/80 rounded-3xl px-6 py-8 md:px-8 md:py-10 flex flex-col justify-between">
                  {/* Top quote + text */}
                  <div>
                    <div className="text-4xl text-[#E0C0C0] mb-4 leading-none">
                      &rdquo;
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-ptext">
                      {item.quote}
                    </p>
                    <div className="mt-4 border-t border-dashed border-[#D3B9B9]" />
                  </div>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-4">
                    {/* Circle avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-[#03373D]" />
                    <div>
                      <p className="font-semibold text-[#03373D] text-sm md:text-base">
                        {item.name}
                      </p>
                      <p className="text-xs md:text-sm text-ptext">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom controls: arrows + dots */}
          <div className="mt-6 flex items-center justify-center gap-6">
            {/* Left arrow */}
            <button
              className="testimonial-prev w-9 h-9 rounded-full border border-[#CFCFCF] flex items-center justify-center bg-white hover:bg-[#F3F3F3] transition"
              aria-label="Previous testimonial"
            >
              <span className="-translate-x-[1px] text-[#303030]">&larr;</span>
            </button>

            {/* Pagination dots */}
            <div className="testimonial-pagination flex items-center gap-2" />

            {/* Right arrow */}
            <button
              className="testimonial-next w-9 h-9 rounded-full bg-[#CAEB66] flex items-center justify-center hover:bg-[#b9e350] transition"
              aria-label="Next testimonial"
            >
              <span className="translate-x-[1px] text-[#03373D]">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
