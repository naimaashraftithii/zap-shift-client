import React from "react";

// change these paths/names to your actual files
import casioLogo from "../../../assets/brands/casio.png";
import amazonLogo from "../../../assets/brands/amazon.png";
import moonstarLogo from "../../../assets/brands/moonstar.png";
import starplusLogo from "../../../assets/brands/amazon_vector.png";
import startpeopleLogo from "../../../assets/brands/start_people.png";
import randstadLogo from "../../../assets/brands/randstad.png";

const logos = [
  casioLogo,
  amazonLogo,
  moonstarLogo,
  starplusLogo,
  startpeopleLogo,
  randstadLogo,
];

const LogoCarousel = () => {
  return (
    <section className="py-10 md:py-12 bg-[#EAECED]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        {/* Heading */}
        <p className="text-center text-base md:text-lg font-semibold text-[#1E1E1E]">
          We&apos;ve helped thousands of sales teams
        </p>

        {/* Logos row */}
        <div className="mt-6 overflow-hidden border-b border-dashed border-[#C4C4C4] pb-6">
          {/* We duplicate the logos array so the scroll looks seamless */}
          <div className="flex items-center gap-10 md:gap-14 min-w-max animate-logo-scroll">
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="brand logo"
                className="h-6 md:h-8 object-contain text-center items-center"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
