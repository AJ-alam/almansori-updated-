import React from "react";
import doctorImg from '../assets/about.png';
import Brand, { BrandText } from "./Brand";

const AboutSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-9 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-3 py-1">
            {/* Meet the Owner & Title */}
            <div>
              <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-brand-primary mb-1">
                Meet the Owner
              </span>
              <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl text-black font-bold leading-tight capitalize whitespace-nowrap">
                Dr. Aysha Almansoori
              </h2>
            </div>

            {/* Role */}
            <p className="text-heading font-semibold text-base md:text-lg tracking-wide">
              Restorative and Aesthetic Specialist
            </p>

            {/* Qualifications List */}
            <div className="space-y-1.5 text-body text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">30+ years</strong> of experience as Restorative and Aesthetic Specialist
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Bachelor Degree</strong> from Cairo University (1994)
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Clinical Master</strong> in Restorative and Aesthetic Dentistry - UCLA (2011)
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Master's Degree</strong> in Restorative and Aesthetic Dentistry - Manchester University (2016)
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Certificate in Dental Implant</strong> Since 2000
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Certified Invisalign Provider</strong> Since 2011
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Invented</strong> Face Enhancement Dentistry
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <p>
                  <strong className="text-heading font-semibold">Fellowship in Anti-Aging</strong> (2016) - Face Enhancement Dentistry Specialist
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-body text-sm md:text-base leading-relaxed pt-1">
              <BrandText>Dr. Aysha AlMansoori established AlMansoori Dental Clinic in 1997.</BrandText> She specializes
              in face enhancement dentistry, dental face lift, and aesthetic dentistry. Her
              interest in facial beauty led her to obtain her fellowship in anti-aging
              and start her brand of face enhancement dentistry.
            </p>
          </div>

          {/* Right Side - Image aligned with text */}
          <div className="relative w-full flex justify-center items-center">
            <div className="w-full max-w-[420px] lg:max-w-[450px] bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-100 rounded-3xl overflow-hidden shadow-md border border-slate-200/60">
              <img
                src={doctorImg}
                alt="Dr. Aysha AlMansoori - Chairman & Managing Director"
                className="w-full h-auto block object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
