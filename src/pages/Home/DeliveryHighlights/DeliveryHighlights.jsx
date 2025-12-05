import React from "react";

import feature1 from "../../../assets/live-tracking.png";
import feature2 from "../../../assets/safe-delivery.png";
import feature3 from "../../../assets/safe-delivery.png";

const items = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    image: feature1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: feature2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: feature3,
  },
];

const DeliveryHighlights = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        <div
          className="rounded-3xl overflow-hidden border-y border-dashed border-[#C9C9C9]"
          style={{ backgroundColor: "#FFFFFF" }} // soft pink
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-10 px-4 sm:px-6 md:px-10 py-8 md:py-10 
                ${index !== items.length - 1 ? "border-b border-[#F2D4D7]" : ""}`}
            >
              {/* Left Illustration */}
              <div className="md:w-1/4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-40 md:max-h-48 object-contain"
                />
              </div>

              {/* Vertical dotted divider on desktop */}
              <div className="hidden md:flex md:w-[1px] justify-center">
                <span className="border-l border-dashed border-[#B6B6B6] h-full" />
              </div>

              {/* Text */}
              <div className="md:w-3/4 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-[#03373D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-ptext">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryHighlights;
