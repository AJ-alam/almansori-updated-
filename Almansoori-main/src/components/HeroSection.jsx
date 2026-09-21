import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/FSR_9780.JPG";
import { BrandText } from "./Brand";


const HeroSection = () => {
  const benefits = [
    'Over 30 Years Of Dental Excellence',
    'First Dental Clinic In Riffa Since 1997',
    'State-Of-The-Art Digital Dentistry',
    'Comprehensive Medical & Dental Care'
  ];

  return (
    <section className=" bg-gray-50">
      <div className="mx-auto">
        <div className="relative overflow-hidden h-[720px]">

          {/* Background Image Container */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt="Happy patient with beautiful smile"
              className="w-full h-full object-cover"
            />
            {/* Slight Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex items-center p-6 md:p-12">

            {/* Dark Content Box */}
            <div className="bg-heading rounded-3xl p-8 md:p-12 max-w-xl">

              <h1 className="font-primary text-2xl md:text-3xl lg:text-4xl leading-normal text-white mb-6">
                Our Philosophy
              </h1>

              <p className="text-white/90 leading-relaxed mb-8">
                At <BrandText>AlMansoori</BrandText> Medical We Believe That The Oral System Is The Gateway To Your Overall Wellbeing. We Provide Comprehensive And Individualized Care For The Face, Smile, Skin, And Mental Health In A Welcoming And Friendly Environment. Experience Healthcare That Puts Your Comfort First.
              </p>

              <ul className="space-y-3 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <span className="text-white text-xl flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="bg-white text-heading px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors">
                <span>Book Your Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
