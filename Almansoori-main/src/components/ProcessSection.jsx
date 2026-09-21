import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaStethoscope, FaSmile, FaArrowRight } from 'react-icons/fa';

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const processes = [
    {
      number: '01',
      title: 'Book Your Appointment',
      description: 'Schedule your visit online or give us a call. We offer flexible appointment times to fit your busy schedule, including evenings and weekends.',
      icon: FaCalendarCheck,
    },
    {
      number: '02',
      title: 'Comprehensive Examination',
      description: 'Our dentist will perform a thorough examination, including digital X-rays if needed, to assess your oral health and discuss your goals.',
      icon: FaStethoscope,
    },
    {
      number: '03',
      title: 'Personalized Treatment',
      description: 'Receive a customized treatment plan tailored to your needs. We explain every step and ensure your comfort throughout the procedure.',
      icon: FaSmile,
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="inline-block text-heading font-semibold tracking-widest uppercase text-xs mb-4">
              How It Works
            </span>
            <h2 className="section-heading">
              Your Journey to a Perfect Smile
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-body text-base md:text-lg leading-relaxed mb-6">
              We've simplified the dental care process to make your experience as
              smooth and comfortable as possible. From booking to treatment,
              we're with you every step of the way.
            </p>
            <Link to="/contact" className="primary-btn w-fit">
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* Process Cards - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
          {processes.map((process, index) => {
            const Icon = process.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Card */}
                <div className={`rounded-3xl p-8 h-full transition-all duration-500 relative overflow-hidden border ${isActive
                    ? 'bg-gradient-to-br from-gray-700 to-gray-900 border-transparent shadow-2xl scale-[1.02]'
                    : 'bg-white border-gray-200 shadow-md'
                  }`}>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top row - Number and Icon */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Number Badge */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                        <span className={`font-primary text-2xl transition-colors duration-500 ${isActive ? 'text-white' : 'text-heading'
                          }`}>
                          {process.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-white/20' : 'bg-gray-50'
                        }`}>
                        <Icon className={`text-2xl transition-colors duration-500 ${isActive ? 'text-white' : 'text-heading'
                          }`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-primary text-2xl md:text-3xl mb-4 capitalize transition-colors duration-500 ${isActive ? 'text-white' : 'text-heading'
                      }`}>
                      {process.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-body'
                      }`}>
                      {process.description}
                    </p>

                    {/* Arrow indicator */}
                    <Link to="/services/dental" className={`mt-6 flex items-center gap-2 transition-all duration-500 ${isActive ? 'text-white opacity-100 translate-y-0' : 'text-heading opacity-0 translate-y-4'
                      }`}>
                      <span className="text-sm font-medium">Learn More</span>
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>

                {/* Connector line between cards */}
                {index < processes.length - 1 && (
                  <div className={`hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 -translate-y-1/2 z-0 transition-colors duration-500 ${isActive ? 'bg-gray-400' : 'bg-gray-200'
                    }`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <div className="text-center group/stat hover:-translate-y-1 transition-transform">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">30+</div>
            <p className="text-body text-sm">Years Experience</p>
          </div>
          <div className="text-center group/stat hover:-translate-y-1 transition-transform">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">15K+</div>
            <p className="text-body text-sm">Happy Patients</p>
          </div>
          <div className="text-center group/stat hover:-translate-y-1 transition-transform">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">6</div>
            <p className="text-body text-sm">Days Open Weekly</p>
          </div>
          <div className="text-center group/stat hover:-translate-y-1 transition-transform">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">100%</div>
            <p className="text-body text-sm">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
