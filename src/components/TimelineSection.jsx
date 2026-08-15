import React, { useState } from "react";
import t1 from "../assets/timeline1.png";
import t2 from "../assets/timeline2.jpg";
import t3 from "../assets/timeline3.jpg";
import t4 from "../assets/timeline4.jpg";
import { BrandText } from "./Brand";

const TimelineSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: "1997",
      title: "First Dental Clinic in Riffa",
      image: t1,
      story:
        "Almansoori Dental Clinic was launched as the first Dental Clinic in the city of Riffa. It grew to become one of the leading and most successful dental clinics in Bahrain, with patients from all over GCC countries.",
    },
    {
      year: "2007",
      title: "Almansoori Dental Centre",
      image: t2,
      story:
        "The incredible growth of Almansoori Dental Clinic into Almansoori Dental Centre was a result of ambitious strides towards greater heights. The increase in the number of patients required an expansion to double the number of dental offices and dentists, becoming a multispecialty dental centre providing 5 different dental specialties.",
    },
    {
      year: "2016",
      title: "Face Enhancement Dentistry",
      image: t3,
      story:
        "Combining aesthetic and dental services. Dr. Aysha developed a technique of Face Enhancement Dentistry as a non-surgical dental and face lift.",
    },
    {
      year: "2022",
      title: "Almansoori Medical",
      image: t4,
      story:
        "The Dental Centre grew into AlMansoori Medical, providing dental and medical services including ENT, Derma, laser and Psychotherapy. All integrated as a preventive holistic treatment for clients. The success owes to the total dedication of management led by Dr. Aysha AlMansoori and a highly qualified professional staff.",
    },
  ];

  const activeItem = timelineData[activeTimeline];

  return (
    <section className="py-10 md:py-14 px-4 md:px-9 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="section-heading mb-3 whitespace-normal md:whitespace-nowrap">our journey</h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover the milestones that shaped our story and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Vertical Timeline Navigation (Left) */}
          <div className="lg:col-span-5 relative pl-4 sm:pl-6">
            {/* Vertical Spine Line */}
            <div className="absolute left-10 sm:left-12 top-6 bottom-6 w-1 bg-gray-200 rounded-full" />
            <div
              className="absolute left-10 sm:left-12 top-6 w-1 bg-heading rounded-full transition-all duration-500 ease-in-out"
              style={{
                height: `${(activeTimeline / (timelineData.length - 1)) * 75}%`,
              }}
            />

            <div className="flex flex-col gap-5 relative z-10">
              {timelineData.map((item, index) => {
                const isActive = activeTimeline === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTimeline(index)}
                    className={`flex items-center gap-4 p-2 pr-6 rounded-full transition-all duration-300 text-left ${
                      isActive
                        ? "bg-heading text-white shadow-xl scale-105 ring-4 ring-heading/15"
                        : "bg-gray-50 hover:bg-gray-100 text-heading border border-gray-200/80"
                    }`}
                  >
                    {/* Avatar Circle */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                      <img
                        src={`/ayesha/ayesha ${index + 1}.png`}
                        alt={`Timeline ${item.year}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Year & Title Label */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className={`font-primary text-xl md:text-2xl ${isActive ? "text-white" : "text-heading"}`}>
                        {item.year}
                      </span>
                      <span className={`text-xs truncate ${isActive ? "text-white/80" : "text-gray-500"}`}>
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Content Card (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50/80 border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden group shadow-md mb-6">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-heading text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                  {activeItem.year}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h3 className="font-primary text-2xl md:text-3xl text-heading leading-tight">
                  <BrandText>{activeItem.title}</BrandText>
                </h3>
                <p className="text-body text-sm md:text-base leading-relaxed">
                  <BrandText>{activeItem.story}</BrandText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
