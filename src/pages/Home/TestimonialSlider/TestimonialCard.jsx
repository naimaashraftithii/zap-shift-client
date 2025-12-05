import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { userName, user_photoURL, review, date, ratings } = testimonial;

  // Format date like: Aug 08, 2024
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl px-6 py-8 md:px-8 md:py-10 h-full flex flex-col justify-between shadow-sm">
      {/* Top quote + text */}
      <div>
        <div className="text-3xl text-[#C3DFE2] mb-4 leading-none">❝</div>

        <p className="text-[#606060] text-sm md:text-base leading-relaxed">
          {review}
        </p>

        <div className="mt-5 border-t border-dashed border-[#C3C3C3]" />
      </div>

      {/* User info */}
      <div className="mt-6 flex items-center gap-4">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover border border-[#E0E0E0]"
        />

        <div>
          <p className="text-sm md:text-base font-semibold text-[#03373D]">
            {userName}
          </p>

          <p className="text-xs text-ptext">{formattedDate}</p>

          <p className="text-xs text-[#FFD700] mt-1">
            ⭐ {ratings.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
