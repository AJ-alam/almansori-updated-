import React from "react";
import doctorImg from '../assets/about.png';
import Brand, { BrandText } from "./Brand";

const AboutSection = () => {
  return (
    <section className="py-6 md:py-8 px-4 md:px-9 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            {/* Title */}
            <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl text-heading leading-tight capitalize whitespace-normal md:whitespace-nowrap">
              Dr. Aysha <Brand className="font-bold text-3xl md:text-4xl lg:text-5xl" />
            </h2>

            {/* Role */}
            <p className="text-heading font-semibold text-lg">
              Restorative and Aesthetic Specialist
            </p>

            {/* Qualifications */}
            <div className="space-y-2">
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>30+ years</strong> of experience in Aesthetic & Restorative Dentistry
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Bachelor Degree</strong> from Cairo University (1994)
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Clinical Master</strong> in Aesthetic and Restorative Dentistry - UCLA (2011)
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Master's Degree</strong> in Restorative & Aesthetic Dentistry - Manchester University (2016)
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Certificate in Dental Implant</strong> Since 2000
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Certified Invisalign Provider</strong> Since 2011
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Invented</strong> Face Enhancement Dentistry
              </p>
              <p className="text-body text-sm md:text-base leading-snug">
                <strong>Fellowship in Anti-Aging</strong> (2016) - Face Enhancement Dentistry Specialist
              </p>
            </div>

            {/* Description */}
            <p className="text-body text-sm md:text-base leading-snug pt-2">
              <BrandText>Dr. Aysha AlMansoori established AlMansoori Dental Clinic in 1997.</BrandText> She specializes
              in face enhancement dentistry, dental face lift, and aesthetic dentistry. Her
              interest in facial beauty led her to obtain her fellowship in anti-aging
              and start her brand of face enhancement dentistry.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={doctorImg}
                alt="Dr. Aysha AlMansoori - Chairman & Managing Director"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
