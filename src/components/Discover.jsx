import React from "react";
import { BrandText } from "./Brand";

const Discover = () => {
  const doctors = [
    {
      name: "Dr. Aysha AlMansoori",
      title: "Founder & Managing Director",
      credentials: "BDS, MSC Restorative Dentistry",
      bio: [
        "Dr. Aysha AlMansoori is the founder and Managing Director of AlMansoori Medical. With over 30 years of experience in dentistry, she established the first dental clinic in Riffa in 1997, which has since grown into one of the leading medical centers in Bahrain.",
        "She specializes in Face Enhancement Dentistry, Dental Face Lift, and Aesthetic Dentistry. Her interest in facial beauty led her to invent the Face Enhancement Dentistry technique and obtain her fellowship in anti-aging.",
        "Her vision is to provide individualized comprehensive Well-Being care using the latest technology, treating patients from across Bahrain and the GCC region."
      ],
      stats: [
        { value: "30+", label: "Years Experience" },
        { value: "15K+", label: "Patients Treated" },
        { value: "1st", label: "Clinic In Riffa" },
        { value: "GCC", label: "Patients Served" }
      ],
      image: "/doctors/ayesha 1.png"
    },
    {
      name: "Dr. Aziza Yaser",
      title: "Partner / Co-founder",
      credentials: "BDS, DHP, MSc Psychology",
      bio: [
        "As an entrepreneur, Dr. Aziza values growth and purpose. After completing her Dental degree, she decided to pursue her passion in the field of mental health. She attained her diplomas in Psychotherapy and Clinical Hypnotherapy, followed by a Masters degree in Psychology.",
        "Dr. Aziza works with individuals, couples, and families with a holistic and integrative approach to well-being using various modalities such as CBT, talk therapy, Somatic work, and clinical hypnotherapy.",
        "\"Introspection, courage, resilience, and patience are fundamental attributes of strong character. It is my hope that clients develop the mental strength and inner faith to forge an intentional path in life.\""
      ],
      stats: [
        { value: "MSc", label: "Psychology" },
        { value: "DHP", label: "Psychotherapy" },
        { value: "4+", label: "Years Experience" },
        { value: "Holistic", label: "Approach" }
      ],
      image: "/doctors/dr aziza.png"
    }
  ];

  return (
    <div className="w-full space-y-0">
      {/* Section 1: Dr. Aysha AlMansoori with Section Heading */}
      <section className="w-full pt-8 md:pt-12 pb-12 md:pb-16 px-4 md:px-9 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-heading mb-2">
              Meet The Owners
            </h2>
          </div>

          {/* Dr. Aysha Profile */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
            {/* Image - reduced size for clean in-view fitting */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -inset-3 bg-gray-200 rounded-[2rem] rotate-3"></div>
                <div className="absolute -inset-3 bg-gray-300 rounded-[2rem] -rotate-2 opacity-60"></div>

                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl border-4 border-white">
                  <img
                    src={doctors[0].image}
                    alt={doctors[0].name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="mb-4">
                <span className="inline-block font-primary bg-gray-100 text-heading px-4 py-1 rounded-full text-sm font-bold mb-1">
                  {doctors[0].title}
                </span>
                <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl text-heading leading-tight">
                  <BrandText>{doctors[0].name}</BrandText>
                </h3>
                <p className="text-body text-sm md:text-base font-medium mt-1.5">{doctors[0].credentials}</p>
              </div>

              <div className="space-y-3 mb-6">
                {doctors[0].bio.map((p, i) => (
                  <p
                    key={i}
                    className="text-body text-sm md:text-base leading-relaxed"
                  >
                    <BrandText>{p}</BrandText>
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {doctors[0].stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-3.5 text-center hover:bg-gray-100 hover:shadow-md transition-all border border-gray-200/80">
                    <div className="font-primary text-2xl lg:text-3xl text-heading mb-1">{stat.value}</div>
                    <p className="text-body text-xs font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Dr. Aziza Yaser in a separate section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-9 bg-gray-50/80 border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-14 items-center">
            {/* Image - reduced size */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -inset-3 bg-gray-200 rounded-[2rem] -rotate-3"></div>
                <div className="absolute -inset-3 bg-gray-300 rounded-[2rem] rotate-2 opacity-60"></div>

                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl border-4 border-white">
                  <img
                    src={doctors[1].image}
                    alt={doctors[1].name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="mb-4">
                <span className="inline-block font-primary bg-gray-100 text-heading px-4 py-1 rounded-full text-sm font-bold mb-1">
                  {doctors[1].title}
                </span>
                <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl text-heading leading-tight">
                  <BrandText>{doctors[1].name}</BrandText>
                </h3>
                <p className="text-body text-sm md:text-base font-medium mt-1.5">{doctors[1].credentials}</p>
              </div>

              <div className="space-y-3 mb-6">
                {doctors[1].bio.map((p, i) => {
                  const isQuote = p.startsWith('"');
                  return (
                    <p
                      key={i}
                      className={`text-body text-sm md:text-base leading-relaxed ${isQuote ? 'italic border-l-4 border-gray-300 pl-4 text-heading' : ''}`}
                    >
                      <BrandText>{p}</BrandText>
                    </p>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {doctors[1].stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-3.5 text-center hover:bg-gray-100 hover:shadow-md transition-all border border-gray-200/80">
                    <div className="font-primary text-2xl lg:text-3xl text-heading mb-1">{stat.value}</div>
                    <p className="text-body text-xs font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discover;
