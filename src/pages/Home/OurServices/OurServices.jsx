import React from "react";
import serviceIcon from "../../../assets/service.png";

const services = [
    {
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    },
    {
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which include warehouse and inventory management support.",
    },
    {
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const OurServices = () => {
    return (
        <section className="py-16 md:py-24 bg-[#03373D] rounded-b-[50px]">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Our Services
                </h2>

                {/* Subtitle */}
                <p className="mt-3 md:mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Cards */}
                <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="
                bg-[#FFE7E7]
                hover:bg-[#CEEB5E]
                rounded-3xl
                p-6 md:p-8 
                shadow-sm 
                flex flex-col 
                gap-3 
                transition-all 
                duration-300
                cursor-pointer
              "
                        >
                            {/* Icon */}
                            {/* Icon */}
                            <span className="self-center flex items-center justify-center w-14 h-14 rounded-full bg-white/70 shadow-sm p-2">
                                <img
                                    src={serviceIcon}
                                    alt="service icon"
                                    className="w-9 h-9 object-contain"
                                />
                            </span>


                            {/* Title */}
                            <h3 className="text-[#03373D]  text-lg md:text-xl font-semibold text-">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base leading-relaxed text-ptext">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default OurServices;
