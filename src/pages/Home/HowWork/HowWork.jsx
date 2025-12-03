import React from "react";
import deliveryIcon from "../../../assets/bookingIcon.png"; // <- your icon

const steps = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowWork = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6 md:mb-8">
          How it Works
        </h2>

        {/* Background */}
        <div
          className="rounded-3xl px-4 sm:px-6 md:px-8 py-8 md:py-10"
          style={{ backgroundColor: "#EAECED" }}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-3"
              >
                {/* Icon */}
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 p-2">
                  <img src={deliveryIcon} className="w-8 h-8 object-contain" />
                </span>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-[#03373D]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-ptext">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
