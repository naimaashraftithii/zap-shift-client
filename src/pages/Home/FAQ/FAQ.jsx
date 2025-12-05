import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How does ZapShift parcel delivery work?",
    answer:
      "ZapShift picks up your parcel from your doorstep or designated drop-off point and delivers it to your recipient using our optimized rider network. You can track your parcel in real-time and receive status updates at every major step of the journey.",
  },
  {
    id: 2,
    question: "Is it suitable for all package sizes and weights?",
    answer:
      "We support a wide range of parcel sizes and weights. Small to medium parcels are handled by our standard riders, while larger or heavier items may require special arrangements based on availability in your area.",
  },
  {
    id: 3,
    question: "How long does delivery usually take?",
    answer:
      "Standard deliveries within the city typically take 24–72 hours, depending on distance and demand. Express and same-day options are also available in selected zones.",
  },
  {
    id: 4,
    question: "Can I track my parcel in real-time?",
    answer:
      "Yes. Every confirmed order comes with a tracking ID. You can use it on our platform to see live status updates, from pickup to final delivery.",
  },
  {
    id: 5,
    question: "What happens if my parcel is delayed or lost?",
    answer:
      "In case of delays, our support team will notify you and your customer. For lost or severely damaged parcels, our service policy includes investigation and compensation based on the declared value and service terms.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-0">
        {/* Heading + subtitle */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#03373D]">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#303030] max-w-2xl mx-auto leading-relaxed">
            Enhance your delivery experience with ZapShift. Find answers to the most
            common questions about parcel safety, timing, tracking, and our services.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-[#4CC0D8] bg-[#FFFFFF]"
                    : "border-transparent bg-[#FDFDFD]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-[#03373D]">
                    {item.question}
                  </span>
                  <span
                    className={`ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#C7C7C7] text-[#303030] text-xs transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5 pt-0 text-sm md:text-base text-[#606060] leading-relaxed border-t border-[#E4E4E4]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-3 px-6 md:px-8 py-3 rounded-full bg-[#CAEB66] text-[#03373D] font-semibold text-sm md:text-base shadow-md hover:bg-[#b9e350] transition">
            See More FAQ&apos;s
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#03373D] text-white text-xs">
              ↗
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
