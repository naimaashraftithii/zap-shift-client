import React from "react";

import ctaBoxes from "../../../assets/location-merchant.png";
import ctaBoxes1 from "../../../assets/customer-top.png"; // top customer illustration

const MerchantCta = () => {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">

                {/* ------------------------------------------
            MERCHANT CTA CARD SECTION
        ------------------------------------------- */}
                <div
                    className="rounded-[40px] p-[1px] mb-16"
                    style={{ backgroundColor: "#EAECED" }}
                >
                    <div className="relative overflow-hidden rounded-[40px] bg-[#03373D] text-white px-6 md:px-10 lg:px-14 py-10 md:py-12 flex flex-col md:flex-row items-center md:items-stretch gap-10">

                        {/* Glow / Wave Decoration */}
                        <div
                            className="pointer-events-none absolute -top-16 inset-x-0 h-32 opacity-60"
                            style={{
                                background:
                                    "radial-gradient(circle at 20% 0, rgba(255,255,255,0.35), transparent 60%), radial-gradient(circle at 80% 0, rgba(90,250,220,0.35), transparent 60%)",
                            }}
                        />

                        {/* LEFT side content */}
                        <div className="relative z-10 md:w-1/2 flex flex-col gap-5">
                            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white">
                                Merchant and Customer Satisfaction
                                <br /> is Our First Priority
                            </h2>

                            <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
                                We offer the lowest delivery charge with the highest value along
                                with 100% safety of your product. ZapShift courier delivers your
                                parcels in every corner of Bangladesh right on time.
                            </p>
                           {/* button */}
                            <div className="mt-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button className="bg-[#CAEB66] text-[#03373D] px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base shadow hover:bg-[#b9e350] transition w-full sm:w-auto">
                                    Become a Merchant
                                </button>

                                <button className="border border-[#CAEB66] text-[#CAEB66] px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-[#CAEB66] hover:text-[#03373D] transition w-full sm:w-auto">
                                    Earn with ZapShift Courier
                                </button>
                            </div>




                        </div>

                        {/* RIGHT side image */}
                        <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end items-center">
                            <img
                                src={ctaBoxes}
                                alt="Courier boxes"
                                className="max-h-56 md:max-h-64 lg:max-h-72 object-contain"
                            />
                        </div>

                    </div>
                </div>

                {/* ------------------------------------------
            CUSTOMER REVIEW TOP SECTION
        ------------------------------------------- */}
                <div className="text-center mb-10">
                    {/* Illustration */}
                    <img
                        src={ctaBoxes1}
                        alt="Customer graphic"
                        className="mx-auto w-32 md:w-40 mb-4 object-contain"
                    />

                    {/* Title */}
                    <h2 className="text-h1 text-2xl md:text-3xl font-semibold text-[#03373D]">
                        What our customers are saying
                    </h2>

                    {/* Subtitle */}
                    <p className="text-subtext text-sm md:text-base max-w-xl mx-auto mt-3 leading-relaxed text-[#303030]">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                        Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>

            </div>
        </section>
    );
};

export default MerchantCta;
